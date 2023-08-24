import axios from "axios";
import { vi, describe, it, expect } from "vitest";
import * as api from "../utils/dataService.js";
import mockData from "../src/constants/mockData.json";
import mockGraduate from "./mockGraduate.js";
// import SERVER from "../../BackEnd/server.js";

vi.mock("axios");

describe("dataService tests", () => {
  describe("Get request made to mockData", () => {
    it("should make an external data call", async () => {
      axios.get.mockResolvedValueOnce(mockData);

      await api.getUserData();

      expect(axios.get).toHaveBeenCalled();
    });

    it("should return the correct data", async () => {
      axios.get.mockResolvedValueOnce(mockData);

      const result = await api.getUserData();

      expect(result).toEqual(mockData.data);
    });

    it("should return error when request is unsuccessful ", async () => {
      const error = { message: `Error` };
      axios.get.mockRejectedValueOnce(error);

      const result = await api.getUserData();

      expect(result).toBe(error);
    });
  });

  describe('Put request made to mockData', () => {

    it('should return 201 and update profile bio', async () => {

      const testGraduate = mockGraduate.testGraduate;
      testGraduate.firstname = "Jimmy";
      api.putBioDataService(testGraduate);

      expect(axios.put).toHaveBeenCalledTimes(1);

    })
  })


});
