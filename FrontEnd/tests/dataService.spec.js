import axios from "axios";
import { getUserData } from "../utils/dataService.js";
import mockData from "../src/constants/mockData.json";

vi.mock("axios");

describe("dataService tests", () => {
  describe("Get request made to mockData", () => {
    it("should make an external data call", async () => {
      axios.get.mockResolvedValueOnce(mockData);

      await getUserData();

      expect(axios.get).toHaveBeenCalled();
    });

    it("should return the correct data", async () => {
      axios.get.mockResolvedValueOnce(mockData);

      const result = await getUserData();

      expect(result).toEqual(mockData.data);
    });

    it("should return error when request is unsuccessful ", async () => {
      const error = { message: `Error` };
      axios.get.mockRejectedValueOnce(error);

      const result = await getUserData();

      expect(result).toBe(error);
    });
  });
});
