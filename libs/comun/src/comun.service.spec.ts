import { Test, TestingModule } from '@nestjs/testing';
import { ComunService } from './comun.service';

describe('ComunService', () => {
  let service: ComunService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ComunService],
    }).compile();

    service = module.get<ComunService>(ComunService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
