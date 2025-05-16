import React, { useState } from 'react';
import { Train, Hotel, MapPin, Calendar, Clock, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const HangzhouTripPlanner = () => {
  const [activeTab, setActiveTab] = useState('itinerary');

  // 高铁方案数据
  const trainOptions = [
    {
      id: 1,
      title: '方案1',
      routes: [
        {
          train: 'G3194',
          from: '许昌北',
          to: '阜阳西',
          departure: '17:19',
          arrival: '18:49',
          duration: '1.5小时',
          stops: '许昌北→鄢陵→周口东→淮阳南→界首南→阜阳西'
        },
        {
          train: 'G1946',
          from: '阜阳西',
          to: '杭州西',
          departure: '19:26',
          arrival: '22:49',
          duration: '3.38小时',
          stops: '阜阳西→淮南南→合肥南→芜湖→宣城→杭州西'
        }
      ],
      totalDuration: '5.5小时'
    },
    {
      id: 2,
      title: '方案2',
      routes: [
        {
          train: 'G1516',
          from: '许昌东',
          to: '郑州东',
          departure: '12:38',
          arrival: '13:02',
          duration: '0.4小时',
          stops: '许昌东→郑州东'
        },
        {
          train: 'G1959',
          from: '郑州东',
          to: '杭州东',
          departure: '13:13',
          arrival: '17:42',
          duration: '4.48小时',
          stops: '郑州东→周口东→合肥南→芜湖→杭州东'
        }
      ],
      totalDuration: '5.5小时'
    },
    {
      id: 3,
      title: '方案3',
      routes: [
        {
          train: 'G3220',
          from: '许昌东',
          to: '郑州东',
          departure: '08:17',
          arrival: '08:40',
          duration: '0.38小时',
          stops: '许昌东→郑州东'
        },
        {
          train: 'G3117',
          from: '郑州东',
          to: '杭州东',
          departure: '09:11',
          arrival: '13:40',
          duration: '4.48小时',
          stops: '郑州东→周口东→合肥南→芜湖→杭州东'
        }
      ],
      totalDuration: '5.5小时'
    },
    {
      id: 4,
      title: '方案4',
      routes: [
        {
          train: 'G3194',
          from: '许昌北',
          to: '阜阳西',
          departure: '17:19',
          arrival: '18:49',
          duration: '1.5小时',
          stops: '许昌北→鄢陵→周口东→淮阳南→界首南→阜阳西'
        },
        {
          train: 'G1946',
          from: '阜阳西',
          to: '杭州西',
          departure: '19:26',
          arrival: '22:49',
          duration: '3.38小时',
          stops: '阜阳西→淮南南→合肥南→芜湖→宣城→杭州西'
        }
      ],
      totalDuration: '5.5小时'
    },
    {
      id: 5,
      title: '方案5',
      routes: [
        {
          train: 'G1291',
          from: '许昌东',
          to: '郑州东',
          departure: '10:55',
          arrival: '11:18',
          duration: '0.38小时',
          stops: '许昌东→郑州东'
        },
        {
          train: 'G1959',
          from: '郑州东',
          to: '杭州东',
          departure: '13:13',
          arrival: '17:42',
          duration: '4.48小时',
          stops: '郑州东→周口东→合肥南→芜湖→杭州东'
        }
      ],
      totalDuration: '5.5小时'
    }
  ];

  // 景点数据
  const attractions = [
    { name: '千岛湖风景区', address: '千岛湖镇' },
    { name: '杭州西湖风景名胜区 - 断桥残雪', address: '龙井路1号杭州西湖风景名胜区内(东北角)' },
    { name: '杭州西湖风景名胜区', address: '龙井路1号' },
    { name: '灵隐寺', address: '法云弄1号' },
    { name: '红叶湾景点', address: '千岛湖镇淳开线附近' },
    { name: '雷峰塔景区', address: '南山路15号' },
    { name: '西溪国家湿地公园', address: '天目山路518号' },
    { name: '云栖竹径', address: '梅灵南路8号' },
    { name: '杭州灵山景区', address: '双浦镇' },
    { name: '杭州半山国家森林公园', address: '半山路北' },
    { name: '杭州西湖风景名胜区 - 九溪瀑布', address: '南星街道南山路1-1号太子湾公园' },
    { name: '大明山风景区', address: '清凉峰镇白果村横溪桥158号' },
    { name: '欢潭村旅游度假区', address: '进化镇欢潭村鹏航路1号' },
    { name: '西山森林公园', address: '转塘街道上城埭村' },
    { name: '超山风景名胜区北园', address: '超山风景名胜区(东北角)' },
    { name: '杭州西山国家森林公园白龙潭景区', address: '转塘街道龙门坎村潘家里66号' },
    { name: '严州古城', address: '梅城镇正大街' },
    { name: '良渚文化村', address: '玉鸟路12号' },
    { name: '太湖源风景区', address: '白沙村太湖源景区' },
    { name: '青山湖景区', address: '锦北街道柳庄驿站出入口' }
  ];

  // 住宿数据
  const hotels = [
    { name: '如家商旅酒店(杭州西湖湖滨断桥店)', address: '保俶路27号' },
    { name: '杭州如如居民宿', address: '转塘街道何家村北村25号' },
    { name: '杭州如院民宿(西湖灵隐店)', address: '西湖街道白乐桥40号' },
    { name: '杭州静怡民宿(西湖动物园店)', address: '四眼井150号好又多超市2层' },
    { name: '杭州天域开元观堂酒店(开元城山度假区店)', address: '进化镇大汤坞新村' },
    { name: '杭州涛伊民宿', address: '宕里村农居点24幢' }
  ];

  // 行程安排
  const itinerary = [
    {
      day: '5月1日',
      activities: [
        { time: '08:00', title: '出发', description: '从许昌乘坐高铁前往杭州' },
        { time: '13:00', title: '到达杭州', description: '入住酒店，稍作休息' },
        { time: '15:00', title: '西湖游览', description: '游览西湖风景区，欣赏断桥残雪等景点' }
      ]
    },
    {
      day: '5月2日',
      activities: [
        { time: '09:00', title: '灵隐寺', description: '参观千年古刹灵隐寺' },
        { time: '13:00', title: '西溪湿地', description: '游览西溪国家湿地公园' }
      ]
    },
    {
      day: '5月3日',
      activities: [
        { time: '08:00', title: '千岛湖一日游', description: '前往千岛湖风景区游览' }
      ]
    },
    {
      day: '5月4日',
      activities: [
        { time: '09:00', title: '雷峰塔', description: '参观雷峰塔景区' },
        { time: '14:00', title: '自由活动', description: '购物或探索其他景点' }
      ]
    },
    {
      day: '5月5日',
      activities: [
        { time: '10:00', title: '返程', description: '从杭州乘坐高铁返回许昌' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* 头部 */}
      <header className="bg-blue-600 text-white py-6 px-4 shadow-md">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold">许昌到杭州五一旅行计划</h1>
          <p className="text-blue-100 mt-1">2024年5月1日 - 5月5日</p>
        </div>
      </header>

      {/* 导航 */}
      <nav className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto flex overflow-x-auto">
          <button
            onClick={() => setActiveTab('itinerary')}
            className={`px-6 py-3 font-medium text-sm flex-shrink-0 ${activeTab === 'itinerary' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
          >
            行程安排
          </button>
          <button
            onClick={() => setActiveTab('trains')}
            className={`px-6 py-3 font-medium text-sm flex-shrink-0 ${activeTab === 'trains' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
          >
            高铁方案
          </button>
          <button
            onClick={() => setActiveTab('attractions')}
            className={`px-6 py-3 font-medium text-sm flex-shrink-0 ${activeTab === 'attractions' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
          >
            景点推荐
          </button>
          <button
            onClick={() => setActiveTab('hotels')}
            className={`px-6 py-3 font-medium text-sm flex-shrink-0 ${activeTab === 'hotels' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
          >
            住宿推荐
          </button>
        </div>
      </nav>

      {/* 主要内容 */}
      <main className="max-w-4xl mx-auto py-6 px-4">
        {/* 行程安排 */}
        {activeTab === 'itinerary' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-xl font-bold mb-6 flex items-center">
              <Calendar className="mr-2 text-blue-500" />
              5天行程安排
            </h2>
            
            <div className="space-y-8">
              {itinerary.map((dayPlan, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="bg-blue-50 px-4 py-3 border-b border-blue-100">
                    <h3 className="font-medium text-blue-800">{dayPlan.day}</h3>
                  </div>
                  <div className="divide-y divide-gray-100">
                    {dayPlan.activities.map((activity, i) => (
                      <div key={i} className="p-4 flex">
                        <div className="mr-4">
                          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                            <Clock size={16} />
                          </div>
                        </div>
                        <div>
                          <div className="font-medium">{activity.time} - {activity.title}</div>
                          <p className="text-gray-600 mt-1">{activity.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* 高铁方案 */}
        {activeTab === 'trains' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-xl font-bold mb-6 flex items-center">
              <Train className="mr-2 text-blue-500" />
              许昌到杭州高铁方案
            </h2>
            
            <div className="space-y-6">
              {trainOptions.map((option) => (
                <div key={option.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="bg-blue-50 px-4 py-3 border-b border-blue-100 flex justify-between items-center">
                    <h3 className="font-medium text-blue-800">{option.title}</h3>
                    <span className="text-sm text-blue-600">总耗时: {option.totalDuration}</span>
                  </div>
                  <div className="divide-y divide-gray-100">
                    {option.routes.map((route, i) => (
                      <div key={i} className="p-4">
                        <div className="flex items-center mb-2">
                          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
                            <Train size={16} />
                          </div>
                          <div>
                            <span className="font-medium">{route.train}次</span>
                            <span className="mx-2 text-gray-400">|</span>
                            <span>{route.from} → {route.to}</span>
                          </div>
                        </div>
                        <div className="grid grid-cols-3 gap-4 text-sm mt-3">
                          <div>
                            <div className="text-gray-500">出发</div>
                            <div className="font-medium">{route.departure}</div>
                          </div>
                          <div>
                            <div className="text-gray-500">到达</div>
                            <div className="font-medium">{route.arrival}</div>
                          </div>
                          <div>
                            <div className="text-gray-500">耗时</div>
                            <div className="font-medium">{route.duration}</div>
                          </div>
                        </div>
                        <div className="mt-3 text-sm text-gray-600">
                          <div className="text-gray-500 mb-1">途径站点:</div>
                          {route.stops}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* 景点推荐 */}
        {activeTab === 'attractions' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-xl font-bold mb-6 flex items-center">
              <MapPin className="mr-2 text-blue-500" />
              杭州热门景点推荐
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {attractions.map((attraction, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -2 }}
                  className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100"
                >
                  <div className="p-4">
                    <h3 className="font-medium">{attraction.name}</h3>
                    <div className="flex items-center mt-2 text-sm text-gray-600">
                      <MapPin size={14} className="mr-1" />
                      <span>{attraction.address}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* 住宿推荐 */}
        {activeTab === 'hotels' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-xl font-bold mb-6 flex items-center">
              <Hotel className="mr-2 text-blue-500" />
              杭州住宿推荐
            </h2>
            
            <div className="space-y-4">
              {hotels.map((hotel, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 4 }}
                  className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100"
                >
                  <div className="p-4 flex items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
                      <Hotel size={18} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">{hotel.name}</h3>
                      <div className="flex items-center mt-1 text-sm text-gray-600">
                        <MapPin size={14} className="mr-1" />
                        <span>{hotel.address}</span>
                      </div>
                    </div>
                    <ChevronRight size={18} className="text-gray-400" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </main>

      {/* 页脚 */}
      <footer className="bg-gray-100 border-t border-gray-200 py-6 px-4 mt-8">
        <div className="max-w-4xl mx-auto text-center text-sm text-gray-500">
          <p>created by <a href="https://space.coze.cn" className="text-blue-600 hover:underline">coze space</a></p>
          <p className="mt-1">页面内容均由 AI 生成，仅供参考</p>
        </div>
      </footer>
    </div>
  );
};

export default HangzhouTripPlanner;