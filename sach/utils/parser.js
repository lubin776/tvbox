const cheerio = require('cheerio');

function parseVideoList(html) {
  const $ = cheerio.load(html);
  const list = [];

  // 示例解析逻辑（需根据实际网站结构调整）
  $('.video-item').each((i, el) => {
    const $el = $(el);
    list.push({
      title: $el.find('h3').text(),
      url: $el.attr('href'),
      cover: $el.find('img').attr('src')
    });
  });

  return list;
}

module.exports = { parseVideoList };