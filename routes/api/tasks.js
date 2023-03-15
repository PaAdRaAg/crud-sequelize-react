const router = require('express').Router();
const { Task } = require('../../db');

router.get('/', async (req, res) => {
    const tasks = await Task.findAll();
    res.json(tasks);
});

router.post('/', async (req, res) => {
    const task = await Task.create(req.body);
    res.json(task);
});

router.put('/:taskId', async (req, res) => {
    await Task.update(req.body, {
        where: { id: req.params.taskId }
    });
    res.json({ success: 'UPDATED successfully' });
});

router.delete('/:taskId', async (req, res) => {
    await Task.destroy({
        where: { id: req.params.taskId }
    });
    res.json({ success: 'DELETED successfully' });
});

module.exports = router;