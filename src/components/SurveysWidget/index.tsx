import BaseWidget from "../BaseWidget";
import SurveyCard from "../SurveyCard";

const SurveysWidget = () => {
  const mockData = [
    {
      _id: "649d9ac8e40a6e3076e30b6c",
      active: false,
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
  ];
  return (
    <BaseWidget width="100%" height="290px">
      {mockData.map((item) => (
        <SurveyCard key={item._id} {...item} />
      ))}
    </BaseWidget>
  );
};

export default SurveysWidget;
