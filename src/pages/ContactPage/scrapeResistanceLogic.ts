/**
 * PROBLEM:
 * Prevent basic web scrapers from harvesting email addresses directly from the page.
 *
 * IDEA:
 * - On the frontend, users must interact with the UI (e.g., click a copy button) to access the email.
 * - The backend never stores the email in plaintext.
 * - A custom encoding/decoding function is used to prevent standard decoders from working.
 *
 * SOLUTION:
 * - Choose a random seed.
 * - Run the `encode` function offline and save the resulting encoded string in the frontend code.
 * - At runtime, call `decode(...)` in the frontend when the user interacts with the page.
 *
 * NOTE:
 * This is NOT SECURE ENCRYPTION it's lightweight obfuscation intended to stop naive scraping only.
 * 
 * FOR A MORE SECURE SOLUTION
 * If you need stronger protection from more sophisticated scrapers (e.g., headless browsers), consider:
 * - Dynamically fetching the encoded string from an API on interaction.
 * - Using WebAssembly or obfuscated JavaScript.
 * - Replacing this with real encryption (e.g., AES with a shared key and crypto.subtle).
 */

const SEED = "corpus callosum";

/**
 * Encodes a string using a seed-based XOR cipher.
 * Intended to be run offline to generate obfuscated output.
 * Base64 is used to ensure safe transport/storage.
 *
 * @param input - The plaintext string to encode.
 * @returns The base64-encoded, XOR-obfuscated string.
 */
export function encode(input: string): string {
    const gen = prng(SEED);
    const encoded = input
        .split('')
        .map(char => {
            const key = gen.next().value!;
            return String.fromCharCode(char.charCodeAt(0) ^ key);
        })
        .join('');
    return btoa(encoded);
}

/**
 * Decodes a previously encoded string using the same seed.
 * Reverses the XOR operation and base64 decoding.
 *
 * @param encoded - The base64-encoded, XOR-obfuscated string.
 * @returns The original plaintext string.
 */
export function decode(encoded: string): string {
    const gen = prng(SEED);
    const decodedBase64 = atob(encoded);
    const original = decodedBase64
        .split('')
        .map(char => {
            const key = gen.next().value!;
            return String.fromCharCode(char.charCodeAt(0) ^ key);
        })
        .join('');
    return original;
}

/**
 * Hashes a seed string into a deterministic numeric value.
 * Used to initialize the pseudo-random generator.
 *
 * @param seed - The seed string.
 * @returns A 32-bit unsigned integer hash.
 */
function hashSeed(seed: string): number {
    let hash = 0;
    for (let i = 0; i < seed.length; i++) {
        hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
    }
    return hash;
}

/**
 * Pseudo-random number generator (PRNG) based on Xorshift.
 * Generates a deterministic byte stream from a string seed.
 *
 * @param seed - The seed string used to initialize the generator.
 * @yields A pseudo-random byte (0–255) on each iteration.
 */
function* prng(seed: string): Generator<number> {
    let state = hashSeed(seed);
    while (true) {
        // Xorshift32 algorithm
        state ^= state << 13;
        state ^= state >>> 17;
        state ^= state << 5;
        yield state & 0xff;
    }
}
