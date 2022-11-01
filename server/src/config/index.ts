import "dotenv/config";

type TConfig = {
  PORT: number;
  DATABASE_URL: string;
  CLIENT_URL: string;
};

export default <TConfig>{
  PORT: process.env.PORT || 5000,
  DATABASE_URL: process.env.DATABASE_URL,
  CLIENT_URL: process.env.CLIENT_URL,
};
