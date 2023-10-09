import { describe, it, expect } from "vitest";
import { LoginResponse, User } from "./lib/interfaces";
import { logIn, logOut, getExcelExport, getUser, getAllUser } from "./lib/api";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const mock = new MockAdapter(axios);

describe("logIn", () => {
  it("should handle login failure", async () => {
    const email = "test@example.com";
    const password = "password";

    // Mock the Axios post request to return an error (e.g., status code 401)
    mock.onPost("/login", { email, password }).reply(401);

    // Call the logIn function
    try {
      await logIn(email, password);
      // If the function does not throw an error, fail the test
      fail("Expected logIn to throw an error for unauthorized login");
    } catch (error) {
      // Assert that the error is an Axios error with the expected status code
      expect(error.response.status).toBe(404);
    }
  });
});

describe("getExcelExport", () => {
  it("should handle export failure", async () => {
    const mockResponse = {
      data: "test",
      headers: {
        "content-type":
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      },
    };

    // Mock the Axios get request to return an error (e.g., status code 401)
    mock.onGet("/export").reply(401, mockResponse);

    // Call the getExcelExport function
    try {
      await getExcelExport();
      // If the function does not throw an error, fail the test
      fail("Expected getExcelExport to throw an error for unauthorized export");
    } catch (error) {
      // Assert that the error is an Axios error with the expected status code
      expect(error.response).toBe(undefined);
    }
  });
});

describe("getUser", () => {
  it("should handle user failure", async () => {
    const mockResponse: User = {
      id: 1,
      name: "Test User",
      email: "test@test.com",
      role: 1,
      email_verified_at: null,
      createdAt: "2021-03-01T00:00:00.000000Z",
      updatedAt: "2021-03-01T00:00:00.000000Z",
      photo_url: null,
    };

    try {
      await getUser();

      fail("Expected getUser to throw an error for unauthorized user");
    } catch (error) {
      expect(error.response).toBe(undefined);
    }
  });
});

describe("getAllUser", () => {
  it("should handle Users array failure", async () => {
    const mockResponse: User[] = [
      {
        id: 1,
        name: "Test User",
        email: "test@test.com",
        role: 1,
        email_verified_at: null,
        createdAt: "2021-03-01T00:00:00.000000Z",
        updatedAt: "2021-03-01T00:00:00.000000Z",
        photo_url: null,
      },
      {
        id: 2,
        name: "Test User",
        email: "test@test.com",
        role: 2,
        email_verified_at: null,
        createdAt: "2021-03-01T00:00:00.000000Z",
        updatedAt: "2021-03-01T00:00:00.000000Z",
        photo_url: null,
      },
    ];

    try {
      await getAllUser();
    } catch (error) {
      expect(error.response).toBe(undefined);
    }
  });
});

describe("Logout funtion", () => {
  it("Should handle logout", async () => {
    try {
      await logOut();
      expect(true).toBe(true);
    } catch (error) {
      expect(error.response).toBe(undefined);
    }
  });
});
