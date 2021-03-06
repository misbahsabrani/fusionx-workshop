import { Injectable } from '@nestjs/common';
import { RandomData } from 'src/models/random-data';
import { Random } from 'mockjs';

@Injectable()
export class RandomService {

  getRandomData(): RandomData {
    const title = Random.name();
    const initials = title.match(/\b\w/g) || [];
    const name = ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
  ​
    const randomData: RandomData = {
      name: title,
      image: Random.image('200x100', Random.color(), '#FFF', 'png', name),
      message: Random.sentence(5),
    };
    return randomData;
  }
}
