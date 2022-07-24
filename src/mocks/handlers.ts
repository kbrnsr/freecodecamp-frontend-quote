import { rest } from 'msw';

const handlers = [
  rest.get('/', (req, res, ctx) => res(
    ctx.status(200),
    ctx.json(
      [
        {
          text: 'Genius is one percent inspiration'
          + 'and ninety-nine percent perspiration.',
          author: 'Thomas Edison',
        },
        {
          text: 'You can observe a lot just by watching.',
          author: 'Yogi Berra',
        }],
    ),
  )),

];
export default handlers;
