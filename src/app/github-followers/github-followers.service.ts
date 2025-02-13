import { DataService } from '../common/services/data.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class GithubFollowersService extends DataService {

  constructor(http: HttpClient) {
    super('https://api.github.com/users/mosh-hamedani/followers', http);
  }
}
