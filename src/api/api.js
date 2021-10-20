import { JwtHandler } from "../jwt-handler/JwtHandler";
export const Api = {
  baseUrl: "http://localhost:3000",

  loginUrl: () => `${Api.baseUrl}/login`,

  readAllGames: () => `${Api.baseUrl}/game`,
  readByIdGames: (id) => `${Api.baseUrl}/game/${id}`,
  createGameUrl: () => Api.baseUrl + "/game",
  updateGameUrl: (id) => `${Api.baseUrl}/game/${id}`,
  deleteGameUrl: (id) => `${Api.baseUrl}/game/${id}`,

  createUserUrl: () => `${Api.baseUrl}/users`,
  deleteUserUrl: (id) => `${Api.baseUrl}/users/${id}`,
  updateUserUrl: (id) => `${Api.baseUrl}/users/${id}`,

  createProfileUrl: () => `${Api.baseUrl}/profile`,

  authHeader: () => ({
    Authorization: "Bearer " + JwtHandler.getJwt(),
  }),

  buildApiGetRequest: (url, auth) =>
    fetch(url, {
      method: "GET",
      headers: auth ? new Headers(Api.authHeader()) : undefined,
    }),

  buildApiPostRequest: (url, body, auth) =>
    fetch(url, {
      method: "POST",
      headers: new Headers({
        "content-type": "application/json",
        ...(auth ? Api.authHeader() : {}),
      }),
      body: JSON.stringify(body),
    }),

  buildApiPatchRequest: (url, body, auth) => {
    fetch(url, {
      method: "PATCH",
      headers: new Headers({
        "content-type": "application/json",
        ...(auth ? Api.authHeader() : {}),
      }),
      body: JSON.stringify(body),
    });
  },
  buildApiDeleteRequest: (url, auth) =>
    fetch(url, {
      method: "DELETE",
      headers: auth ? Api.authHeader() : {},
    }),
};
