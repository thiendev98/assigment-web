import shortempty1 from "../../modal/trousers/short_empty1.jpg";
import shortempty2 from "../../modal/trousers/short_empty2.jpg";
import shortempty3 from "../../modal/trousers/short_empty3.jpg";
import shorttwobuttons1 from "../../modal/trousers/short_twobuttons1.jpg";
import shorttwobuttons2 from "../../modal/trousers/short_twobuttons2.jpg";
import shorttwobuttons3 from "../../modal/trousers/short_twobuttons3.jpg";
import shortpleated1 from "../../modal/trousers/short_pleated1.jpg";
import shortpleated2 from "../../modal/trousers/short_pleated2.jpg";
const TrousersList = [
  {
    key: 1,
    type: "trousers",
    code: "LQ302001",
    name: "Quần short nữ xếp ly",
    price: 375000,
    link: [shortpleated1, shortpleated2],
    color: ["Nâu", "Đen"],
    size: ["S", "M", "L"],
  },
  {
    key: 2,
    type: "trousers",
    code: "LQ302005",
    name: "Quần short nữ dáng suông",
    price: 375000,
    link: [shortempty1, shortempty2, shortempty3],
    color: ["Trắng", "Nâu", "Đen"],
    size: ["S", "M", "L"],
  },
  {
    key: 3,
    type: "trousers",
    code: "LQ302002",
    name: "Quần short nữ hai cúc",
    price: 375000,
    link: [shorttwobuttons1, shorttwobuttons2, shorttwobuttons3],
    color: ["Trắng", "Tím than", "Đen"],
    size: ["S", "M", "L"],
  }
];
export default TrousersList;
