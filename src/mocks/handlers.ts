import { rest } from 'msw';
import constants from '../constants';
import testConstants from '../testConstants';

const handlers = [
  rest.get(`${constants.baseUrl}/`, (req, res, ctx) => res(
    ctx.status(200),
    ctx.json([
      testConstants.testQuotes,
    ]),
  )),
];
export default handlers;
