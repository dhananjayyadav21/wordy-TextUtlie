import React from "react";

export default function About(props) {
 
  return (
    <div>
      <div className="container" style={props.mystyle}>
        <h2 className="my-3">About Us</h2>
        <div className="accordion" id="accordionExample" style={props.mystyle}>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                style={props.mystyle}
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Analyze your text
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={props.mystyle}>
                <strong>Textutils gives you a way to analyze your text.</strong> quickly and efficiently, Be it word count,
                overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                style={props.mystyle}
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Free character counter tool
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={props.mystyle}>
                <strong>Textutils is a free character counter tool.</strong> that provides instant character count & word count statics for a given text. Textutils reports the number of words and characters. Thus it is suitable for writing text with word/character limit.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                style={props.mystyle}
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Word counter software
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={props.mystyle}>
                <strong>This word counter software work in any web Browser.</strong> such as chrome, firefox, internet Explorer, safari,opera. it suits to count characters in facebook, blog, books, excel document, pdf document, essays etc.
                overflow.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
