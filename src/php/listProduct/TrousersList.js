import jeansdarkblue from "../../modal/trousers/jeans_darkblue.jpg";
import jeanslightblue from "../../modal/trousers/jeans_lightblue.jpg";
import shortcaro from "../../modal/trousers/short_caro.jpg";
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
    code: "QJ302068DA ",
    name: "Quần jeans dáng suông màu xanh đậm",
    price: 399000,
    link: [jeansdarkblue],
    color: ["Xanh đậm"],
    size: ["S", "M", "L"],
  },
  {
    key: 2,
    type: "trousers",
    code: "QJ302068DA ",
    name: "Quần jeans dáng suông màu xanh nhạt",
    price: 399000,
    link: [jeanslightblue],
    color: ["Xanh nhạt"],
    size: ["S", "M", "L"],
  },
  {
    key: 3,
    type: "trousers",
    code: "LQ302001",
    name: "Quần short nữ xếp ly",
    price: 375000,
    link: [shortpleated1, shortpleated2],
    color: ["Nâu", "Đen"],
    size: ["S", "M", "L"],
  },
  {
    key: 4,
    type: "trousers",
    code: "LQ302005",
    name: "Quần short nữ dáng suông",
    price: 375000,
    link: [shortempty1, shortempty2, shortempty3],
    color: ["Trắng", "Nâu", "Đen"],
    size: ["S", "M", "L"],
  },
  {
    key: 5,
    type: "trousers",
    code: "LQ302002",
    name: "Quần short nữ hai cúc",
    price: 375000,
    link: [shorttwobuttons1, shorttwobuttons2, shorttwobuttons3],
    color: ["Trắng", "Tím than", "Đen"],
    size: ["S", "M", "L"],
  },
  {
    key: 6,
    type: "trousers",
    code: "LQ302006",
    name: "Quần short nữ kẻ caro",
    price: 395000,
    link: [shortcaro],
    color: ["Kẻ"],
    size: ["S", "M", "L"],
  },
];
export default TrousersList;
