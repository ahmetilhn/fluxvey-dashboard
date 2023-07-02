import SwitchCheckbox from "../shared/SwitchCheckbox";
import Input from "../shared/Input";
import Textarea from "../shared/Textarea";
import "./index.scss";
import BoxCheckbox from "../shared/BoxCheckbox";
import Button from "../shared/Button";
import { initPreviewWidget } from "../../plugins/preview-widgets.plugin";
import React, { PropsWithChildren, useEffect, useState } from "react";
import ISurvey from "../../types/ISurvey";
type Props = {
  survey?: ISurvey;
  isEditMod?: boolean;
  handleSubmit: (payload: {}) => void;
};
const SurveyEditor: React.FC<PropsWithChildren<Props>> = ({
  survey,
  isEditMod = false,
  handleSubmit,
}) => {
  const [name, setName] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [comment, setComment] = useState<string>("");
  const [isActive, setActive] = useState<boolean>(false);
  const [isAgreementAccepted, setAgreementAccepted] = useState(true);

  useEffect(() => {
    initPreviewWidget(survey?._id);
    if (survey) {
      setName(survey?.name);
      setTitle(survey?.title);
      setComment(survey?.comment);
      setActive(survey?.active);
    }
  }, [survey]);
  return (
    <section className="survey-editor horizontal-center">
      <div className="survey-editor__form vertical-center">
        <div className="form vertical-center">
          <div className="form__item vertical-center">
            <span>Survey Name</span>
            <Input
              type="text"
              value={name}
              placeholder="Survey Name"
              onChange={(e) => setName(e)}
            />
          </div>
          <div className="form__item vertical-center">
            <span>Survey Title</span>
            <Textarea
              value={title}
              placeholder="Survey Title E.G:How likely is it that you will recommend our product to a friend or colleague?"
              onChange={(e) => setTitle(e)}
            />
          </div>
          <div className="form__item vertical-center">
            <span>Description</span>
            <Textarea
              value={comment}
              placeholder="Survey Description E.G: This form created for product analyze and tracking..."
              onChange={(e) => setComment(e)}
            />
          </div>
          <div className="form__item vertical-center">
            <span>Status</span>
            <SwitchCheckbox value={isActive} onChange={(e) => setActive(e)} />
          </div>
          <div className="form__item vertical-center">
            <span>...</span>
            <div className="warning horizontal-center">
              <BoxCheckbox
                value={isAgreementAccepted}
                onChange={(e) => setAgreementAccepted(e)}
              />
              <p>
                By creating this survey, you agree that it is a survey that does
                not evaluate or disparage a political or personal character.
              </p>
            </div>
          </div>
          <div className="form__item vertical-center">
            <Button
              isDisabled={!title || !name || !comment || !isAgreementAccepted}
              width="100%"
              onClick={() =>
                handleSubmit({ title, active: isActive, comment, name })
              }
            >
              {isEditMod ? "Update" : "Create"}
            </Button>
          </div>
        </div>
      </div>
      <div className="survey-editor__preview vertical-center">
        <div className="fluxvey-root-div" id="fluxvey_root_div"></div>
      </div>
    </section>
  );
};
export default SurveyEditor;
