import { ILinkCard } from "./LinkCard";

export interface IAllContent {
  sections: ISection[];
}

export interface ISection {
  sectionTitle: string;
  links: ILinkCard[];
}
