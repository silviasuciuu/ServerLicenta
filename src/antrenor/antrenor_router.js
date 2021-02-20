
export const router = new Router();

router.get('/', async (ctx) => {
    const response = ctx.response;
    const grupa = ctx.state.user.grupa;
    response.body = await studentStore.find({grupa});
    response.status = 200; // ok


});