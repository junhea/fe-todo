import { columnList } from "../model/model.js";
import { ColumnView } from "./components/ColumnView.js";

export const MainView = () => {
  return `
<main class="main">
    ${Object.keys(columnList)
      .map((columnId, idx) => ColumnView(columnId, idx))
      .join("")}   
      </main>
`;
};
