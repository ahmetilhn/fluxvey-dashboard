export default interface IAnswer {
  rate: number;
  message: string;
  session: {
    device_type: string;
    operating_system: string;
    page_url: string;
    platform: string;
    referer: string;
    translation: any;
    user_agent: string;
  };
  custom_data: [];
  survey_id: string;
}
