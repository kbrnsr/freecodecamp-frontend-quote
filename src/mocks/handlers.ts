import { rest } from 'msw';
import constants from '../constants';
import { testQuotes } from '../testConstants';

const handlers = [
  rest.get(`${constants.baseUrl}/`, (req, res, ctx) => res(
    ctx.status(200),
    ctx.json(
      testQuotes,
    ),
  )),
];
export default handlers;
