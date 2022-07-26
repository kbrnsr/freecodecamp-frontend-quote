import { rest } from 'msw';
import constants from '../constants';
import testConstants from '../testConstants';

let counter = 0;
const handlers = [
  rest.get(`${constants.baseUrl}/`, (req, res, ctx) => {
    counter += 1;
    return res(
      ctx.status(200),
      ctx.json([
        testConstants.testQuotes[counter - 1],
      ]),
    );
  }),
];
export default handlers;
