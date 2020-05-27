import {RenderInstruction} from "aurelia-validation";

export class SimpleValidationRenderer {

  public render(instruction: RenderInstruction) {
    for (let {elements} of instruction.unrender) {
      elements.forEach(target => target.parentElement.querySelector(".error").textContent = "");
    }

    for (let { elements} of instruction.render) {
      elements.forEach(target => target.parentElement.querySelector(".error").textContent = "error.message");
    }
  }
}