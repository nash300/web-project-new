import { MyContexts } from "../../contexts/ContextFile";
import { useContext } from "react";

const ResultElement = () => {
  const { ViewProfile } = useContext(MyContexts);
  return (
    <div id="result-element">
      <div id="info-section">
        <span id="title">user's name</span>
        <span id="description">
          information of the user. ij oifewrhogifhe roigh reohg oie hrgoihregh
          reoihg oierhg oirheg öoiejobiheo rtgh eorhg eorh goherogrhe goh
          rogeroihgj oeirhgrehgrwethyerhyreth werh rwehr5t hr hgyerw5 ye5 y
          oeirh goeihr goeh rog heorihgeorhg reohg oreh goeir hgoreig oeir
          jgboeknb ortejgho ofg reojgoie jrgoierj ogi hiuh weifhi wefhb wiehfi
          whf wiebfiewrhbgfi erghbi regeirbgierhb gihehbgier gierw hgverhg eoi
          urgfoip weuiofweoirwie rowe yurwoei ryoje roigj eoirhgoeirh goeo gher
          oghero igjer oigh eoirhgreoihg oreih goerh goire oighreoig
          horegerherherth etrhwt4 jrt hyre yrte yer. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Ex consequatur voluptatum, deserunt,
          error aut eligendi quisquam, rem ea laudantium quibusdam sunt
          similique iusto cupiditate fugit a sequi obcaecati illum
          veniam.information of the user. ij oifewrhogifhe roigh reohg oie
          hrgoihregh reoihg oierhg oirheg öoiejobiheo rtgh eorhg eorh goherogrhe
          goh rogeroihgj oeirhgrehgrwethyerhyreth werh rwehr5t hr hgyerw5 ye5 y
          oeirh goeihr goeh rog heorihgeorhg reohg oreh goeir hgoreig oeir
          jgboeknb ortejgho ofg reojgoie jrgoierj ogi hiuh weifhi wefhb wiehfi
          whf wiebfiewrhbgfi erghbi regeirbgierhb gihehbgier gierw hgverhg eoi
          urgfoip weuiofweoirwie rowe yurwoei ryoje roigj eoirhgoeirh goeo gher
          oghero igjer oigh eoirhgreoihg oreih goerh goire oighreoig
          horegerherherth etrhwt4 jrt hyre yrte yer. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Ex consequatur voluptatum, deserunt,
          error aut eligendi quisquam, rem ea laudantium quibusdam sunt
          similique iusto cupiditate fugit a sequi obcaecati illum veniam.
        </span>
      </div>
      <div id="btn-section">
        <ViewProfile />
      </div>
    </div>
  );
};

export default ResultElement;
