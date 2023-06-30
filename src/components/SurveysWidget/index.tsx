import BaseWidget from "../BaseWidget";
import SurveyCard from "../SurveyCard";
import "./index.scss";
const SurveysWidget = () => {
  const mockData = [
    {
      _id: "649d9ac8e40a6e3076e30b6c",
      active: true,
      author_id: "111",
      comment: "Example survey",
      name: "All Site Rate Survey",
      view_counts: 1050,
      render_counts: 27892,
      response_counts: 2807,
      type: "TemplateOne",
      title: "Do you like to our site? Please rate us?",
      createdAt: "2023-06-29T14:52:56.949Z",
      updatedAt: "2023-06-29T14:52:56.949Z",
      __v: 0,
    },
    {
      _id: "649d923234ac8e40a6e3076e30b6c",
      active: false,
      author_id: "111",
      comment: "Example survey for meee",
      name: "Product page survey",
      view_counts: 100,
      render_counts: 2792,
      response_counts: 807,
      type: "TemplateOne",
      title: "Do you like to our site? Please rate us?",
      createdAt: "2023-06-29T14:52:56.949Z",
      updatedAt: "2023-06-29T14:52:56.949Z",
      __v: 0,
    },
  ];
  return (
    <BaseWidget width="100%" height="310px">
      <div className="survey-list horizontal-center">
        {mockData.map((item) => (
          <SurveyCard key={item._id} {...item} />
        ))}
      </div>
    </BaseWidget>
  );
};

export default SurveysWidget;
