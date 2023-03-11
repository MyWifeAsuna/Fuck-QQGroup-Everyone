import { segment } from "oicq";
import plugin from '../../lib/plugins/plugin.js'

/*
 * @Tool: Created with Visual Studio Code.
 * @Description: 
 * @Author: kirito
 * @Date: 2023-03-11 19:00:07
 * @LastEditTime: 2023-03-11 20:14:29
 * @Blog: mywifeasuna.top
 */

export class suo extends plugin {
  constructor () {
    super({
      name: '嗦牛子',
      dsc: '狠狠的吮吸',
      event: 'message',
      priority: 5000,
      rule: [
        {
          reg: '^#?嗦牛子$',
          fnc: 'suo'
        }
      ]
    })
  }

  async suo (e) {
      console.log("用户命令：", e.msg);
      let num = Math.round(Math.random() * 200);
      // let num = 51;  // 测试 
      if (num <= 20) {
        let msg = [segment.at(e.user_id), "没嗦到，是在是太可惜了！"]
        e.reply(msg);
      } else if (num <= 70) {
        let msg = [segment.at(e.user_id), "嗦到了~吗？牙签无力，你挑了挑牙。"]
        e.reply(msg);
      } else if (num <= 71) {
        let map = await e.group.getMemberMap();
        let arrMember = Array.from(map.values());
        let mem = arrMember[Math.round(Math.random() * (arrMember.length-1))];
        let msg = ["holy shit！", segment.at(e.user_id), "嗦到了" + mem.nickname + "的牛牛直接怀孕了！"]
        e.reply(msg);
      } else if (num <= 150) {
        let map = await e.group.getMemberMap();
        let arrMember = Array.from(map.values());
        let mem = arrMember[Math.round(Math.random() * (arrMember.length-1))];
        let msg = [segment.at(e.user_id), "嗦到了" + mem.nickname + "的牛牛居然有" + num/10 + "cm这么长", segment.image(`https://q1.qlogo.cn/g?b=qq&s=0&nk=${mem.user_id}`)]
        e.reply(msg);
      } else if (num > 200) {
        let map = await e.group.getMemberMap();
        let arrMember = Array.from(map.values());
        let mem = arrMember[Math.round(Math.random() * (arrMember.length-1))];
        let msg = ["卧槽", segment.at(e.user_id), "嗦到了" + mem.nickname + "的" + num/10 + "厘米巨无霸", segment.image(`https://q1.qlogo.cn/g?b=qq&s=0&nk=${mem.user_id}`)]
        e.reply(msg);
      }
  }
  
}
