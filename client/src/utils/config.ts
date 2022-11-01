interface IConfig {
  url: string;
}

const config: IConfig = {
  url: process.env.REACT_APP_SERVER_URL || "http://localhost:5000/submission",
};

export default config;
