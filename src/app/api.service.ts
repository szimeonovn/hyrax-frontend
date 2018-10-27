import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  ACCOUNT_MODULE_URL = 'http://localhost:8081/hyrax/api';
  PROJECT_MODULE_URL = 'http://localhost:8082/hyrax/api';
  EMAIL_MODULE_URL = 'http://localhost:8083/hyrax/api';


  constructor(private httpClient: HttpClient) {
  }

  // --- ACCOUNT MODULE ---
  /**
   * Resource to create a new account
   * @param param
   * @returns {Observable<Object>}
   */
  addAccounts(param) {
    return this.httpClient.post(`${this.ACCOUNT_MODULE_URL}/account`, param);
  }

  /**
   * Resource to login the given user
   * @param userName
   * @param password
   * @returns {Observable<ArrayBuffer>}
   */
  loginUser(userName, password) {
    return this.httpClient.post(`${this.ACCOUNT_MODULE_URL}/hyrax/api/login`, userName, password);
  }

  /**
   * Resource to get details about me
   * @returns {Observable<Object>}
   */
  getCurrentUserDetails() {
    return this.httpClient.get(`${this.ACCOUNT_MODULE_URL}/account/details/me`);
  }

  /**
   * Resource to get details about the given user
   * @param userName
   * @returns {Observable<Object>}
   */
  getUserDetails(user) {
    return this.httpClient.get(`${this.ACCOUNT_MODULE_URL}/account/details/${user}`);
  }

  /**
   * Retrieve secured account response
   * @param user
   * @returns {Observable<Object>}
   */
  getSecuredUserDetails(user) {
    return this.httpClient.get(`${this.ACCOUNT_MODULE_URL}/admin/account/${user}`);
  }

  // --- PROJECT MODULE ---

  // board-member-rest-controller
  /**
   * Resource to list all members by the given board name
   * @param boardName
   * @returns {Observable<Object>}
   */
  getAllMembersOfGivenBoardGame(boardName) {
    return this.httpClient.get(`${this.PROJECT_MODULE_URL}/board/${boardName}/member/details`);
  }

  /**
   * Resource to add the members of the given team to the given board
   * @param boardName
   * @param teamName
   * @returns {Observable<Object>}
   */
  addMembersOfGivenTeamToTheGivenBoard(boardName, teamName) {
    return this.httpClient.post(`${this.PROJECT_MODULE_URL}/board/${boardName}/member/team/${teamName}`, null);
  }

  /**
   * Resource to remove a board member from the board team
   * @param boardName
   * @param userName
   * @returns {Observable<Object>}
   */
  deleteGivenMemberOfGivenBoard(boardName, userName) {
    return this.httpClient.delete(`${this.PROJECT_MODULE_URL}/board/${boardName}/member/${userName}`);
  }

  /**
   * Resource to add a member to the given board
   * @param boardName
   * @param userName
   * @returns {Observable<Object>}
   */
  addMemberToGivenBoard(boardName, userName) {
    return this.httpClient.post(`${this.PROJECT_MODULE_URL}/board/${boardName}/member/${userName}`, null);
  }

  // board-rest-controller
  /**
   * Resource to list all the boards by the user
   * @returns {Observable<Object>}
   */
  listAllBoardsOfUser() {
    return this.httpClient.get(`${this.PROJECT_MODULE_URL}/board`);
  }

  /**
   * Resource to remove the given board
   * @param boardName
   * @returns {Observable<Object>}
   */
  deleteGivenBoard(boardName) {
    return this.httpClient.delete(`${this.PROJECT_MODULE_URL}/board/${boardName}`);
  }

  /**
   * Resource to create the given board
   * @param boardName
   * @returns {Observable<Object>}
   */
  createGivenBoard(boardName) {
    return this.httpClient.post(`${this.PROJECT_MODULE_URL}/board/${boardName}`, null);
  }

  // column-rest-controller

  /**
   * GET /board/{boardName}/column
   Resource to list all the columns by the given board name
   * @param boardName
   * @returns {Observable<Object>}
   */
  listAllColumnByGivenBoardName(boardName) {
    return this.httpClient.get(`${this.PROJECT_MODULE_URL}/board/${boardName}/column`);
  }

  /**
   * Resource to delete the given column from the given board
   * @param boardName
   * @param columnName
   * @returns {Observable<Object>}
   */
  deleteGivenColumnFromGivenBoard(boardName, columnName) {
    return this.httpClient.delete(`${this.PROJECT_MODULE_URL}/board/${boardName}/column/${columnName}`);
  }

  /**
   * Resource to create the given column for the given board
   * @param boardName
   * @param columnName
   * @returns {Observable<Object>}
   */
  createGivenColumnForGivenBoard(boardName, columnName) {
    return this.httpClient.post(`${this.PROJECT_MODULE_URL}/board/${boardName}/column/${columnName}`, null);
  }

  /**
   * Resource to modify the position of the given column
   * @param boardName
   * @param columnName
   * @returns {Observable<Object>}
   */
  modifyThePositionOfGivenColumn(boardName, columnName) {
    return this.httpClient.put(`${this.PROJECT_MODULE_URL}/board/${boardName}/column/${columnName}/order`, null);
  }

  // label-rest-controller
  /**
   * Resource to list all the labels by the given board name
   * @param boardName
   * @returns {Observable<Object>}
   */
  listAllLabelByGivenBoardName(boardName) {
    return this.httpClient.get(`${this.PROJECT_MODULE_URL}/board/${boardName}/label`);
  }

  /**
   * Resource to remove the given label
   * @param boardName
   * @param labelId
   * @returns {Observable<Object>}
   */
  deleteGivenLabel(boardName, labelId) {
    return this.httpClient.delete(`${this.PROJECT_MODULE_URL}/board/${boardName}/label/${labelId}`);
  }

  /**
   * Resource to remove the given label from the task
   * @param boardName
   * @param labelId
   * @param taskId
   * @returns {Observable<Object>}
   */
  deleteGivenLabelFromTask(boardName, labelId, taskId) {
    return this.httpClient.delete(`${this.PROJECT_MODULE_URL}/board/${boardName}/label/${labelId}/task/${taskId}`);
  }

  /**
   * Resource to add the given label for the given task
   * @param boardName
   * @param labelId
   * @param taskId
   * @returns {Observable<Object>}
   */
  addGivenLabelForGivenTask(boardName, labelId, taskId) {
    return this.httpClient.put(`${this.PROJECT_MODULE_URL}/board/${boardName}/label/${labelId}/task/${taskId}`, null);
  }

  /**
   * Resource to create a new label for the given board
   * @param boardName
   * @param labelName
   * @returns {Observable<Object>}
   */
  createNewLabelForTheGivenBoard(boardName, labelName) {
    return this.httpClient.post(`${this.PROJECT_MODULE_URL}/board/${boardName}/label/${labelName}`, null);
  }

  // moving-task-rest-controller
  /**
   * Resource to move the task between columns
   * @param boardName
   * @param columnName
   * @param taskId
   * @param newColumnName
   * @returns {Observable<Object>}
   */
  moveTaskBetweenColumns(boardName, columnName, taskId, newColumnName) {
    return this.httpClient.put(`${this.PROJECT_MODULE_URL}/board/${boardName}/column/${columnName}/task/${taskId}/newcolumn/${newColumnName}`, null);
  }

  /**
   * Resource to update the position of the task in the given column
   * @param boardName
   * @param columnName
   * @param taskId
   * @returns {Observable<Object>}
   */
  updatePositionOfTaskInGivenColumn(boardName, columnName, taskId) {
    return this.httpClient.put(`${this.PROJECT_MODULE_URL}/board/${boardName}/column/${columnName}/task/${taskId}/order`, null);
  }

  // task-assignment-rest-controller
  /**
   * Resource to assign user to the given task
   * @param boardName
   * @param taskId
   * @param userName
   * @returns {Observable<Object>}
   */
  assignUserToGivenTask(boardName, taskId, userName) {
    return this.httpClient.put(`${this.PROJECT_MODULE_URL}/board/${boardName}/task/${taskId}/user/${userName}`, null);
  }

  // task-rest-controller
  /**
   * Resource to list all the tasks on the given board and the given column
   * @param boardName
   * @param columnName
   * @returns {Observable<Object>}
   */
  listAllTaskOnGivenBoardAndGivenColumn(boardName, columnName) {
    return this.httpClient.get(`${this.PROJECT_MODULE_URL}/board/${boardName}/column/${columnName}/task`);
  }

  /**
   * Resource to create a new task for the given column
   * @param boardName
   * @param columnName
   * @returns {Observable<Object>}
   */
  createNewTaskForGivenColumn(boardName, columnName) {
    return this.httpClient.post(`${this.PROJECT_MODULE_URL}/board/${boardName}/column/${columnName}/task`, null);
  }

  /**
   * Resource to remove the given task
   * @param boardName
   * @param columnName
   * @param taskId
   * @returns {Observable<Object>}
   */
  deleteGivenTask(boardName, columnName, taskId) {
    return this.httpClient.delete(`${this.PROJECT_MODULE_URL}/board/${boardName}/column/${columnName}/task/${taskId}`);
  }

  /**
   * Resource to get the given task
   * @param boardName
   * @param columnName
   * @param taskId
   * @returns {Observable<Object>}
   */
  getGivenTask(boardName, columnName, taskId) {
    return this.httpClient.get(`${this.PROJECT_MODULE_URL}/board/${boardName}/column/${columnName}/task/${taskId}`);
  }

  /**
   * Resource to update the name or the description of the existing task
   * @param boardName
   * @param columnName
   * @param taskId
   * @returns {Observable<Object>}
   */
  updateNameOrDescriptionOfExistingTask(boardName, columnName, taskId) {
    return this.httpClient.put(`${this.PROJECT_MODULE_URL}/board/${boardName}/column/${columnName}/task/${taskId}`, null);
  }

  // team-member-rest-controller
  /**
   * Resource to remove a team member from the given team
   * @param teamName
   * @param userName
   * @returns {Observable<ArrayBuffer> | Observable<Blob> | Observable<string> | Observable<HttpEvent<ArrayBuffer>> | Observable<HttpEvent<Blob>> | Observable<HttpEvent<string>> | Observable<HttpEvent<Object>> | Observable<HttpEvent<any>> | Observable<HttpResponse<ArrayBuffer>> | Observable<HttpResponse<Blob>> | Observable<HttpResponse<string>> | Observable<HttpResponse<Object>> | Observable<HttpResponse<any>> | Observable<Object> | Observable<any>}
   */
  deleteTeamMemberFromGivenTeam(teamName, userName) {
    return this.httpClient.delete(`${this.PROJECT_MODULE_URL}/team/${teamName}/member/${userName}`);
  }

  /**
   * Resource to add a new member to the given team
   * @param teamName
   * @param userName
   * @returns {Observable<Object>}
   */
  addMemberToGivenTeam(teamName, userName) {
    return this.httpClient.post(`${this.PROJECT_MODULE_URL}/team/${teamName}/member/${userName}`, null);
  }

  /**
   * Resource to list all team members for the given team
   * @param teamName
   * @returns {Observable<Object>}
   */
  listAllTeamMembersForGivenTeam(teamName) {
    return this.httpClient.get(`${this.PROJECT_MODULE_URL}/team/${teamName}/members`);
  }

  // team-rest-controller
  /**
   * Resource to list all the teams by the user
   * @returns {Observable<Object>}
   */
  listTeamsByUser() {
    return this.httpClient.get(`${this.PROJECT_MODULE_URL}/team`);
  }

  /**
   * Resource to create a team
   * @returns {Observable<Object>}
   */
  createTeam() {
    return this.httpClient.post(`${this.PROJECT_MODULE_URL}/team`, null);
  }

  /**
   * Resource to delete a team
   * @param teamName
   * @returns {Observable<Object>}
   */
  deleteTeam(teamName) {
    return this.httpClient.delete(`${this.PROJECT_MODULE_URL}/team/${teamName}`);
  }

  // watch-task-rest-controller
  /**
   * Resource to unwatch the given task
   * @param boardName
   * @param taskId
   * @returns {Observable<Object>}
   */
  unwatchGivenTask(boardName, taskId) {
    return this.httpClient.put(`${this.PROJECT_MODULE_URL}/board/${boardName}/task/${taskId}/unwatch`, null);
  }

  /**
   * Resource to watch the given task
   * @param boardName
   * @param taskId
   * @returns {Observable<Object>}
   */
  watchGivenTask(boardName, taskId) {
    return this.httpClient.put(`${this.PROJECT_MODULE_URL}/board/${boardName}/task/${taskId}/watch`, null);
  }

  // email-sender-rest-controller

  /**
   * Resource to send email
   * @returns {Observable<Object>}
   */
  sendMail() {
    return this.httpClient.post(`${this.EMAIL_MODULE_URL}/email`, null);
  }
}
