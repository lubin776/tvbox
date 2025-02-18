const router = require('express').Router();
const { parseVideoList } = require('../utils/parser');

router.post('/search', async (req, res) => {
  try {
    const { searchUrl, keyword } = req.body;
    
    // 替换关键词
    const targetUrl = searchUrl.replace('{name}', encodeURIComponent(keyword));
    
    // 获取目标网站内容
    const { data } = await axios.get(targetUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });

    // 解析视频列表
    const videoList = parseVideoList(data);
    res.json({ success: true, data: videoList });
  } catch (error) {
    res.status(500).json({ 
      success: false,
      error: error.message
    });
  }
});

module.exports = router;