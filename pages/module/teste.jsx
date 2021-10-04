import { Component } from "react";
import Comp3, {
  Comp1 as Blabla,
  Comp2,
  Comp4,
  Comp5,
  Comp6,
} from "../../components/module/funcionais";

export default function teste() {
  return (
    <div>
      <Blabla />
      <Comp2 />
      <Comp3 />
      <Comp4 />
      <Comp5 />
      <Comp6 msg="Legal!!!" />
    </div>
  );
}
