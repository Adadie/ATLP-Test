import { Router } from 'express';
import HostAccomodation from '../controllers/hostAccomodation';
import AuthMiddleware from '../middlewares/auth.middleware';
import { validateHostAccomodation } from '../middlewares/validations/hostAccomodationValidation';

const router = Router();
const hostAccomodation = new HostAccomodation();

router.get(
  '/accomodations',
  AuthMiddleware.checkToken,
  hostAccomodation.getAll
);
router.get(
  '/accomodations/:id',
  AuthMiddleware.checkToken,
  hostAccomodation.getOne
);
router.post(
  '/accomodations',
  AuthMiddleware.checkToken,
  validateHostAccomodation,
  hostAccomodation.create
);
router.put(
  '/accomodations/:id',
  AuthMiddleware.checkToken,
  hostAccomodation.update
);
router.delete(
  '/accomodations/:id',
  AuthMiddleware.checkToken,
  hostAccomodation.delete
);

export default router;
