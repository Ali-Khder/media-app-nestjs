import { Controller, Get, Query } from '@nestjs/common';
import { query } from 'express';
import { SearchService } from './search.service';

@Controller('gifs/search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Get()
  searchGifs(@Query() query: { content: string; limit: number }) {
    return this.searchService.search(query.content, query.limit);
  }
}
