import {
  Book,
  Cluster,
  Code,
  Cube,
  Database,
  FormSubtract,
  Globe,
  Gremlin,
  Grommet,
  Java,
  Launch,
  LineChart,
  Link,
  Paint,
  Reactjs,
  Risk,
  Rss,
  Satellite,
  System,
  Tag,
  Youtube,
} from "grommet-icons";
import { IAllContent } from ".";

export const ColumnContent: IAllContent = {
  sections: [
    {
      sectionTitle: "Satellite States and Ephemerides",
      links: [
        {
          title: "Space-Track.org",
          description:
            "Recent TLEs, Starlink ephemerides, comprehensive unclassified satellite catalog, conjunction messages, handbooks, and more.",
          icon: <Satellite size="large" color="#147EB3" />,
          link: "https://www.space-track.org/#Landing",
        },
        {
          title: "N2YO",
          description:
            "Great if you want to know a satellite's current position as well as some catalog information about it.",
          icon: <Database size="large" color="#D33D17" />,
          link: "https://www.n2yo.com/",
        },
        {
          title: "NASA / CDDIS",
          description:
            "Crustal Dynamics Data Information System (CDDIS): contains GNSS satellite information. I use it for high rate ephemerides for GPS satellites.",
          icon: <Globe color={"#FBD065"} size="large" />,
          link: "https://cddis.nasa.gov/Data_and_Derived_Products/GNSS/hourly_30second_data.html",
        },
        {
          title: "GPS Tags",
          description:
            "RSO and PRN numbers of GPS satellites; I use this in tandem with CDDIS, as the tags in its documentation are not accurate (as of June 2023).",
          icon: <Tag color={"#F0B726"} size="large" />,
          link: "https://www.n2yo.com/satellites/?c=20",
        },
        {
          title: "WAAS",
          description:
            "Data source for Wide Area Augmentation System (WAAS) truth ephemerides.",
          icon: <Link size="large" color="#43BF4D" />,
          link: "https://www.nstb.tc.faa.gov/RTData_WaasSatelliteData.htm",
        },
      ],
    },
    {
      sectionTitle: "Space Info",
      links: [
        {
          title: "Gunter's Space Page",
          description:
            "A meticulously kept database of launches, organized by type, nation, and chronology. Details on space missions (including the cancelled ones) and astronauts.",
          icon: <Launch size="large" color="#E76A6E" />,
          link: "https://space.skyrocket.de/",
        },
        {
          title: "SatCat Boxscore",
          description:
            "Updated breakdown of payloads, debriis, and rocket bodies by country, including what is on orbit and decayed. Want to know who is the worst debris offender? Look here.",
          icon: <Cube size="large" color="#68C1EE" />,
          link: "https://celestrak.org/satcat/boxscore.php",
        },
        {
          title: "NORAD GPE Statistics",
          description:
            "How old are the NORAD states? When were they last updated? How many lost? Celestrak has the answers.",
          icon: <LineChart size="large" color="#32A467" />,
          link: "https://celestrak.org/NORAD/elements/gp-statistics.php",
        },
      ],
    },
    {
      sectionTitle: "Space Code",
      links: [
        {
          title: "Space-Track.org API",
          description:
            "How to interact with space-track API in several programming languages (Java, Python, etc.)",
          icon: <Java size="large" color="#D0B090" />,
          link: "https://www.space-track.org/documentation#howto",
        },
        {
          title: "Astrodynamics Software",
          description:
            "Software libraries in various languages associated with Fundamentals of Astrodynamics and Applications by David A. Vallado.",
          icon: <Satellite size="large" color="#EC9A3C" />,
          link: "https://celestrak.org/software/vallado-sw.php",
        },
        {
          title: "satellite.js",
          description:
            "Javascript library for propagation, coordinate conversions, time systems, and more.",
          icon: <Code size="large" color="#E5E8EB" />,
          link: "https://github.com/shashwatak/satellite-js",
        },
        {
          title: "Optical Link Budget Code",
          description:
            "An optical link budget tool, with support for scintillation, beam fit, APDs, and 4 quadrant detectors from MIT-STARLab",
          icon: <Rss size="large" color="#96290D" />,
          link: "https://github.com/MIT-STARLab/Optical-Link-Budget",
        },
      ],
    },
    {
      sectionTitle: "Textbooks",
      links: [
        {
          title: "Spacecraft Systems Engineering (4th Edition)",
          description:
            "Texbook by Peter Fortescue, Graham Swinerd, and John Stark",
          icon: <Satellite size="large" color="#8E292C" />,
          link: "https://download.e-bookshelf.de/download/0000/5963/63/L-G-0000596363-0002363727.pdf",
        },
        {
          title: "Probability",
          description:
            "Probability textbook by Dimitri Bertsekas and John Tsitsiklis",
          icon: <Risk size="large" color="#935610" />,
          link: "https://bank.engzenon.com/tmp/5e7f97b9-c014-4995-972e-4bc8c0feb99b/5f00c512-a668-4279-90fe-4777c0feb99b/introduction_to_probability_bertsekas_2nd_2008.pdf",
        },
        {
          title: "Communication Systems Engineering (2nd Edition)",
          description:
            "Covers source coding, quantization, modulation, noise, BER analysis, coding, etc.",
          icon: <System size="large" color="#5F6B7C" />,
          link: "https://citeseerx.ist.psu.edu/document?repid=rep1&type=pdf&doi=91646880c73ed85e7759842b5084e1c99b95ab3a",
        },
        {
          title: "Data Networks (2nd Edition)",
          description:
            "Textbook by Dimitri P. Bertsekas and Robert G. Gallager. A little out of date but a good resource.",
          icon: <Cluster size="large" color="#184A90" />,
          link: "https://web.mit.edu/dimitrib/www/datanets.html",
        },
      ],
    },
    {
      sectionTitle: "Developer Resources",
      links: [
        {
          title: "ReactJS - setup script",
          description:
            "Set up the backbone of a serverless ReactJS application with my preferred libraries.",
          icon: <Reactjs size="large" color="#4C90F0" />,
          link: "https://github.com/tedinspace/scripts/blob/main/create-react-stack.sh",
        },
        {
          title: "Color Theory",
          description: "A good place to start when choosing colors.",
          icon: <Paint size="large" color="#FF66A1" />,
          link: "https://blueprintjs.com/docs/#core/colors",
        },
        {
          title: "Lodash - docs",
          description:
            "My favorite function library - additional library is needed for TypeScript.",
          icon: <FormSubtract size="large" color="#D4F17E" />,
          link: "https://lodash.com/docs/4.17.15",
        },
        {
          title: "Grommet",
          description: "My favorite component library (storybook form).",
          icon: <Grommet size="large" color="plain" />,
          link: "https://storybook.grommet.io/?path=/story/all--all",
        },
        {
          title: "Grommet - docs",
          description: "Documentation for my favorite component library.",
          icon: <Book size="large" color="#7961DB" />,
          link: "https://v2.grommet.io/",
        },
        {
          title: "Grommet - icons",
          description: "Searchable documentation for Grommet icons.",
          icon: <Gremlin size="large" color="#9881F3" />,
          link: "https://icons.grommet.io/",
        },
      ],
    },
    {
      sectionTitle: "Videos",
      links: [
        {
          title: "Ascend to Orbit",
          description: "A good way of conceptualizing orbital heights.",
          icon: <Youtube size="large" color="plain" />,
          link: "https://www.youtube.com/watch?v=H7hySo_hsyk",
        },
      ],
    },
  ],
};
