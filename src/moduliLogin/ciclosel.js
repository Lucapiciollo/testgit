import elementRadio from "./elementRadio.js";
import elementText from "./elementText.js";
import elementTextarea from "./elementTextarea.js";
import elementCheck from "./elementCheck.js";
import elementCombo from "./elementCombo.js";
import elementFile from "./elementFile.js";
import elementData from "./elementData.js";
import elementNumber from "./elementNumber.js";
import elementCurrency from "./elementCurrency.js";

export default function ciclosel(divElemento, selezione) {
  switch (selezione.value) {
    case "radiogroup":
      elementRadio(divElemento);
      break;
    case "text":
      elementText(divElemento);
      break;
    case "textarea":
      elementTextarea(divElemento);
      break;
    case "checkbox":
      elementCheck(divElemento);
      break;
    case "file":
      elementFile(divElemento);
      break;
    case "currency":
      elementCurrency(divElemento);
      break;
    case "number":
      elementNumber(divElemento);
      break;
    case "combo":
      elementCombo(divElemento);
      break;
    case "data":
      elementData(divElemento);
      break;
  }
}