import SwitchCheckbox from "../shared/SwitchCheckbox";
import Input from "../shared/Input";
import Textarea from "../shared/Textarea";
import "./index.scss";
import BoxCheckbox from "../shared/BoxCheckbox";
import Button from "../shared/Button";
const SurveyEditor = () => {
  return (
    <section className="survey-editor horizontal-center">
      <div className="survey-editor__form vertical-center">
        <div className="form vertical-center">
          <div className="form__item vertical-center">
            <span>Survey Name</span>
            <Input type="text" placeholder="Survey Name" onChange={() => {}} />
          </div>
          <div className="form__item vertical-center">
            <span>Survey Title</span>
            <Textarea
              placeholder="Survey Title E.G:How likely is it that you will recommend our product to a friend or colleague?"
              onChange={() => {}}
            />
          </div>
          <div className="form__item vertical-center">
            <span>Description</span>
            <Textarea
              placeholder="Survey Description E.G: This form created for product analyze and tracking..."
              onChange={() => {}}
            />
          </div>
          <div className="form__item vertical-center">
            <span>Status</span>
            <SwitchCheckbox onChange={() => {}} />
          </div>
          <div className="form__item vertical-center">
            <span>...</span>
            <div className="warning horizontal-center">
              <BoxCheckbox onChange={() => {}} />
              <p>
                By creating this survey, you agree that it is a survey that does
                not evaluate or disparage a political or personal character.
              </p>
            </div>
          </div>
          <div className="form__item vertical-center">
            <Button width="100%" onClick={() => {}}>
              Create
            </Button>
          </div>
        </div>
      </div>
      <div className="survey-editor__preview vertical-center"></div>
    </section>
  );
};
export default SurveyEditor;
