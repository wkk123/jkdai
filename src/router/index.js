import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'

// 引入静态资源
require('@/assets/css/public/animate.css')
require('@/assets/css/public/public.css')
    // require('@/assets/css/main/index.css')

//引入组件
import mobile from '@/components/mobile/mobile.vue'
import navbar from '@/components/element/navbar.vue'
import home from '@/components/template/home/home.vue' //首页
import record from '@/components/template/record/record.vue' //借款记录
import question from '@/components/template/question/question.vue' //常见问题
import AboutUs from '@/components/template/AboutUs/AboutUs.vue' //关于我们
import idea from '@/components/template/idea/idea.vue' //意见反馈
import seting from '@/components/template/seting/seting.vue' //设置
import resume from '@/components/template/resume/resume.vue' //个人信息
import nickname from '@/components/template/nickname/nickname.vue' //修改昵称
import identity from '@/components/template/password/identity.vue' //验证身份
import note from '@/components/template/password/note.vue' //短信验证
import ResetPass from '@/components/template/password/ResetPass.vue' //重置交易密码
import ResetLogin from '@/components/template/password/ResetLogin.vue' //重置登录密码
import setPass from '@/components/template/password/setPass.vue' //设置交易密码
import bankCard from '@/components/template/bankCard/bankCard.vue' //借款记录
import binding from '@/components/template/bankCard/binding.vue' //绑定借记卡
import bank from '@/components/template/bankCard/bank.vue' //查看支持银行
import bindCard from '@/components/template/bankCard/bindCard.vue' //绑卡
import LendMoney from '@/components/template/LendMoney/LendMoney.vue' //申请借款
import discount from '@/components/template/discount/discount.vue' //选择优惠券
import coupon from '@/components/template/discount/coupon.vue' //选择优惠券
import myinfo from '@/components/template/myinfo/myinfo.vue' //我的
import wallet from '@/components/template/myinfo/wallet.vue' //我的钱包
import moneyInfo from '@/components/template/moneyInfo/moneyInfo.vue' //借款详情
import bargain from '@/components/template/moneyInfo/bargain.vue' //合同列表
import discover from '@/components/template/discover/discover.vue' //发现
import protocol from '@/components/template/protocol/protocol.vue' //服务协议
import message from '@/components/template/protocol/message.vue' //消息
import messagebox from '@/components/template/protocol/messagebox.vue' //消息


Vue.use(Router)

export default new Router({
    routes: [
        // {
        //       path: '*',
        //       name: '/',
        //       redirect: '/'
        //   },
        {
            path: '/',
            name: 'mobile',
            redirect: '/mobile/home',
            component: mobile,
            children: [{
                path: '/mobile/home',
                name: 'home',
                component: home,
                meta: { navShow: true, cname: '即刻贷', right: 'news' }
            }, {
                path: '/mobile/discover',
                name: 'discover',
                component: discover,
                meta: { navShow: true, cname: '发现', }
            }, {
                path: '/mobile/myinfo',
                name: 'myinfo',
                component: myinfo,
                meta: { navShow: true, cname: '我的', font: '#ffffff', bgcolor: '#26b0ff', right: 'seting' }
            }, {
                path: '/mobile/record',
                name: 'record',
                component: record,
                meta: { navShow: false, cname: '借款记录', left: 'back' }
            }, {
                path: '/mobile/coupon',
                name: 'coupon',
                component: coupon,
                meta: { navShow: false, cname: '我的优惠券', left: 'back', right: 'bargain', Text: '兑换优惠券' }
            }, {
                path: '/mobile/bankCard',
                name: 'bankCard',
                component: bankCard,
                meta: { navShow: false, cname: '我的银行卡', left: 'back' }
            }, {
                path: '/mobile/wallet',
                name: 'wallet',
                component: wallet,
                meta: { navShow: false, cname: '我的钱包', left: 'back1', font: '#ffffff', bgcolor: '#26b0ff', right: 'bargain', Text: '提现规则' }
            }, {
                path: '/mobile/question',
                name: 'question',
                component: question,
                meta: { navShow: false, cname: '常见问题', left: 'back' }
            }, {
                path: '/mobile/AboutUs',
                name: 'AboutUs',
                component: AboutUs,
                meta: { navShow: false, cname: '关于我们', left: 'back' }
            }, {
                path: '/mobile/idea',
                name: 'idea',
                component: idea,
                meta: { navShow: false, cname: '意见反馈', left: 'back' }
            }, {
                path: '/mobile/seting',
                name: 'seting',
                component: seting,
                meta: { navShow: false, cname: '设置', left: 'back' }
            }, {
                path: '/mobile/resume',
                name: 'resume',
                component: resume,
                meta: { navShow: false, cname: '个人信息', left: 'back' }
            }, {
                path: '/mobile/nickname',
                name: 'nickname',
                component: nickname,
                meta: { navShow: false, cname: '个人信息', left: 'back' }
            }, {
                path: '/mobile/identity',
                name: 'identity',
                component: identity,
                meta: { navShow: false, cname: '验证身份', left: 'back' }
            }, {
                path: '/mobile/note',
                name: 'note',
                component: note,
                meta: { navShow: false, cname: '短息验证', left: 'back' }
            }, {
                path: '/mobile/ResetPass',
                name: 'ResetPass',
                component: ResetPass,
                meta: { navShow: false, cname: '重置交易密码', left: 'back' }
            }, {
                path: '/mobile/ResetLogin',
                name: 'ResetLogin',
                component: ResetLogin,
                meta: { navShow: false, cname: '重置登录密码', left: 'back' }
            }, {
                path: '/mobile/setPass',
                name: 'setPass',
                component: setPass,
                meta: { navShow: false, cname: '设置交易密码', left: 'back' }
            }, {
                path: '/mobile/binding',
                name: 'binding',
                component: binding,
                meta: { navShow: false, cname: '绑定借记卡', left: 'back' }
            }, {
                path: '/mobile/bindCard',
                name: 'bindCard',
                component: bindCard,
                meta: { navShow: false, cname: '绑卡', left: 'back' }
            }, {
                path: '/mobile/LendMoney',
                name: 'LendMoney',
                component: LendMoney,
                meta: { navShow: false, cname: '申请借款', left: 'back' }
            }, {
                path: '/mobile/discount',
                name: 'discount',
                component: discount,
                meta: { navShow: false, cname: '选择优惠券', left: 'back' }
            }, {
                path: '/mobile/moneyInfo',
                name: 'moneyInfo',
                component: moneyInfo,
                meta: { navShow: false, cname: '借款详情', font: '#ffffff', bgcolor: '#26b0ff', left: 'back1', right: 'bargain', Text: '查看合同' }
            }, {
                path: '/mobile/bargain',
                name: 'bargain',
                component: bargain,
                meta: { navShow: false, cname: '合同列表', left: 'back' }
            }, {
                path: '/mobile/bank',
                name: 'bank',
                component: bank,
                meta: { navShow: false, cname: '查看支持银行', left: 'back' }
            }, {
                path: '/mobile/protocol',
                name: 'protocol',
                component: protocol,
                meta: { navShow: false, cname: '服务与隐私协议', left: 'back' }
            }, {
                path: '/mobile/message',
                name: 'message',
                component: message,
                meta: { navShow: false, cname: '消息', left: 'back' }
            }, {
                path: '/mobile/messagebox',
                name: 'messagebox',
                component: messagebox,
                meta: { navShow: false, cname: '消息中心', left: 'back' }
            }]
        }
    ]
})