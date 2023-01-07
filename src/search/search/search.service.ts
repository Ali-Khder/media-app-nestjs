import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map } from 'rxjs';

@Injectable()
export class SearchService {
  private url = 'https://tenor.googleapis.com/v2/search';
  private apiKey = 'AIzaSyBgRtowJ43P3N5_4kebTJVBCT_4PTfa810';
  constructor(private httpService: HttpService) {}

  async search(content: string, limit: number) {
    console.log(content);
    console.log(limit);
    const response = await this.httpService
      .get(
        `${this.url}?q=${content}&key=${this.apiKey}=&client_key=my_test_app&limit=${limit}`,
      )
      .pipe(map((response) => response.data));
    return response;
  }
}
