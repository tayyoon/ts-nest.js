import { Injectable, NotFoundException } from '@nestjs/common';
import { BoardStatus } from './board.status.enum';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardRepository } from './board.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Board } from './board.entity';

@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(BoardRepository)
    private boardRepository: BoardRepository,
  ) {}
  //   getAllBoards(): Board[] {
  //     return this.boards;
  //   }
  //   createBoard(createBoardDto: CreateBoardDto) {
  //     const { title, desc } = createBoardDto;
  //     const board: Board = {
  //       id: uuid(), // 유니크한 값을 주기위한 라이브러리, 데이터베이스를 사용하면 따로 지정을 해주면 된당
  //       title, // title: title,
  //       desc, // desc: desc,
  //       status: BoardStatus.PUBLIC, // 디폴트값으로는 퍼블릭
  //     };
  //     this.boards.push(board);
  //     return board;
  //   }

  async getBoardById(id: number): Promise<Board> {
    const found = await this.boardRepository.findOne(id);

    if (!found) {
      throw new NotFoundException(`${id}를 찾을수가 없습니다.`);
    }
    return found;
  }
  //   getBoardById(id: string): Board {
  //     const found = this.boards.find((board) => board.id === id);
  //     // 예외인스턴스 적용 ( 없는값을 검색했을때 에러 나타내기)
  //     if (!found) {
  //       throw new NotFoundException(`${id} 게시물을 찾을수가 없습니다.`);
  //     }
  //     return found;
  //   }
  //   deleteBoard(id: string): void {
  //     // 리턴할 값이 없기때문에 void타입으로 선언
  //     const found = this.getBoardById(id);
  //     // 없는값을 지우려고 할때, 있는지 없는지를 getByid에서 체크. 없으면 그 쪽에서 바로 에러 발생, 있으면 아래쪽으로 가서 삭제 실행
  //     this.boards = this.boards.filter((board) => board.id != found.id);
  //     // this.boards에 전달받은 id값과 다른것만 남겨서 다시 boards에 넣는다.
  //   }
  //   updateBoardStatus(id: string, status: BoardStatus): Board {
  //     const board = this.getBoardById(id);
  //     board.status = status;
  //     return board;
  //   }
}
