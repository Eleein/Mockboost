import React from "react";
import "./FinReach.scss";
import { FinReachSection } from "./FinReachSection/FinReachSection";
import FinReachPic from "./FinReachPic.png";

const sections = [
  {
    section: 1,
    className: "grey-bg",
    imgSrc: FinReachPic,
    header: "Multi-banking",
    headerParagraph:
      "Multi-Banking technologies are rapidly growing and provide users a " +
      "simple and holistic overview of their financial situation. finreach " +
      "solutions offers a Multi-Banking Aggregation API for financial product builders.",
    content: [
      {
        smallHeader: "Account Aggregation",
        paragraph:
          "Aggregate your consumers' financial accounts in one place. " +
          "You can connect bank accounts, credit cards, depot accounts, PayPal accounts etc. with a single API."
      },
      {
        smallHeader: "Transaction Aggregation",
        paragraph:
          "Aggregate your consumers' " +
          "financial accounts in one place. You can connect bank accounts, " +
          "credit cards, depot accounts, PayPal accounts etc. with a single API."
      }
    ]
  },
  {
    section: 2,
    className: "blue-bg",
    imgSrc: FinReachPic,
    header: "Transaction Categorisation",
    headerParagraph:
      "Having tags and tagging transactions can be overwhelming. " +
      "We provide both a pre-populated solution as well as a builder to create your own category schemas.",
    content: [
      {
        smallHeader: "Tagger",
        paragraph:
          "Pre-populated tags derived from millions of account transactions."
      },
      {
        smallHeader: "Custom Categories ",
        paragraph:
          "Simple to use tagging functionality to " +
          "create your own categories."
      }
    ]
  },
  {
    section: 3,
    className: "dark-grey-bg",
    imgSrc: FinReachPic,
    header: "Multi-banking",
    headerParagraph:
      "Multi-Banking technologies are rapidly growing and provide users a " +
      "simple and holistic overview of their financial situation. finreach " +
      "solutions offers a Multi-Banking Aggregation API for financial product builders.",
    content: [
      {
        smallHeader: "Account Aggregation",
        paragraph:
          "Aggregate your consumers' financial accounts in one place. " +
          "You can connect bank accounts, credit cards, depot accounts, PayPal accounts etc. with a single API."
      },
      {
        smallerHeader: "Transaction Aggregation ",
        paragraph:
          "Aggregate your consumers' " +
          "financial accounts in one place. You can connect bank accounts, " +
          "credit cards, depot accounts, PayPal accounts etc. with a single API."
      }
    ]
  },
  {
    section: 4,
    className: "dark-green-bg",
    imgSrc: FinReachPic,
    header: "Multi-banking",
    headerParagraph:
      "Multi-Banking technologies are rapidly growing and provide users a " +
      "simple and holistic overview of their financial situation. finreach " +
      "solutions offers a Multi-Banking Aggregation API for financial product builders.",
    content: [
      {
        smallHeader: "Account Aggregation",
        paragraph:
          "Aggregate your consumers' financial accounts in one place. " +
          "You can connect bank accounts, credit cards, depot accounts, PayPal accounts etc. with a single API."
      },
      {
        smallHeader: "Transaction Aggregation ",
        paragraph:
          "Aggregate your consumers' " +
          "financial accounts in one place. You can connect bank accounts, " +
          "credit cards, depot accounts, PayPal accounts etc. with a single API."
      }
    ]
  },
  {
    section: 5,
    className: "purple-bg",
    imgSrc: FinReachPic,
    header: "Multi-banking",
    headerParagraph:
      "Multi-Banking technologies are rapidly growing and provide users a " +
      "simple and holistic overview of their financial situation. finreach " +
      "solutions offers a Multi-Banking Aggregation API for financial product builders.",
    content:[
    {smallHeader: "Account Aggregation",
    paragraph:
      "Aggregate your consumers' financial accounts in one place. " +
      "You can connect bank accounts, credit cards, depot accounts, PayPal accounts etc. with a single API."},
    {smallHeader: "Transaction Aggregation ",
    paragraph:
      "Aggregate your consumers' " +
      "financial accounts in one place. You can connect bank accounts, " +
      "credit cards, depot accounts, PayPal accounts etc. with a single API."
  }]}
];

export function FinReach() {
  return (
    <>
      {sections.map(section => {
        return <FinReachSection section={section} key={section.section} />;
      })}
    </>
  );
}
