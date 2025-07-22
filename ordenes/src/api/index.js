import axios from "axios";

const baseURL = "ALQ-Odata-ZAMANAGE_LOGISTIC/";

const instance = axios.create({
  baseURL
});

export const getTableData = async (params = { $top: 100, $skip: 0 }) => {
  const { data } = await instance.get("/ZAMMST_LGORTSet", {
    params
  });

  return data.d?.results || data.d || data.value;
};

export const getTableCount = async () => {
  const { data } = await instance.get("/ZAMMST_LGORTSet/$count");
  return data;
};
