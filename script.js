// 游戏数据 - 这里只包含部分示例，您需要替换为完整的游戏数据
const gamesData = [
    // solo游戏
    { id: 1, name: "Mini Rogue: A Roguelike Microgame", category: "solo", minPlayers: 1, maxPlayers: 1, minTime: 10, maxTime: 60, avgTime: 60, description: "单人地牢探险游戏" },
    { id: 2, name: "Gloomhaven: Solo Scenarios", category: "solo", minPlayers: 1, maxPlayers: 1, minTime: 0, maxTime: 0, avgTime: 0, description: "Gloomhaven的专属单人剧本" },
    { id: 3, name: "Paper App Dungeon", category: "solo", minPlayers: 1, maxPlayers: 1, minTime: 5, maxTime: 90, avgTime: 90, description: "结合App的纸上地牢游戏" },
    
    // 双人游戏
    { id: 4, name: "Mr. Jack Pocket", category: "duo", minPlayers: 2, maxPlayers: 2, minTime: 15, maxTime: 15, avgTime: 15, description: "不对称推理游戏" },
    { id: 5, name: "Splendor Duel", category: "duo", minPlayers: 2, maxPlayers: 2, minTime: 30, maxTime: 30, avgTime: 30, description: "宝石收集策略游戏" },
    { id: 6, name: "The Fox in the Forest", category: "duo", minPlayers: 2, maxPlayers: 2, minTime: 30, maxTime: 30, avgTime: 30, description: "童话主题的吃墩游戏" },
    { id: 7, name: "Jaipur", category: "duo", minPlayers: 2, maxPlayers: 2, minTime: 30, maxTime: 30, avgTime: 30, description: "印度集市交易游戏" },
    { id: 8, name: "Android: Netrunner", category: "duo", minPlayers: 2, maxPlayers: 2, minTime: 45, maxTime: 45, avgTime: 45, description: "赛博朋克卡牌游戏" },
    { id: 9, name: "Undaunted: Normandy", category: "duo", minPlayers: 2, maxPlayers: 2, minTime: 45, maxTime: 60, avgTime: 60, description: "二战战术卡牌游戏" },
    
    // 4人游戏
    { id: 10, name: "Azul", category: "four", minPlayers: 2, maxPlayers: 4, minTime: 30, maxTime: 45, avgTime: 45, description: "瓷砖拼接抽象游戏" },
    { id: 11, name: "Santorini", category: "four", minPlayers: 2, maxPlayers: 4, minTime: 20, maxTime: 20, avgTime: 20, description: "希腊神话建筑游戏" },
    { id: 12, name: "Kingdomino", category: "four", minPlayers: 2, maxPlayers: 4, minTime: 15, maxTime: 25, avgTime: 25, description: "多米诺拼图王国建造" },
    { id: 13, name: "Clank!: A Deck-Building Adventure", category: "four", minPlayers: 2, maxPlayers: 4, minTime: 30, maxTime: 60, avgTime: 60, description: "牌组构建地牢探险" },
    { id: 14, name: "Everdell", category: "four", minPlayers: 1, maxPlayers: 4, minTime: 40, maxTime: 80, avgTime: 80, description: "森林动物城市建设" },
    { id: 15, name: "Root", category: "four", minPlayers: 2, maxPlayers: 4, minTime: 60, maxTime: 90, avgTime: 90, description: "不对称区域控制游戏" },
    
    // 5-6人游戏
    { id: 16, name: "Cockroach Poker", category: "five-six", minPlayers: 2, maxPlayers: 6, minTime: 20, maxTime: 20, avgTime: 20, description: "吹牛猜虫游戏" },
    { id: 17, name: "SCOUT", category: "five-six", minPlayers: 2, maxPlayers: 5, minTime: 20, maxTime: 20, avgTime: 20, description: "不能重排手牌的吃墩游戏" },
    { id: 18, name: "Camel Up", category: "five-six", minPlayers: 3, maxPlayers: 8, minTime: 30, maxTime: 30, avgTime: 30, description: "骆驼赛跑赌博游戏" },
    { id: 19, name: "Secret Hitler", category: "five-six", minPlayers: 5, maxPlayers: 10, minTime: 45, maxTime: 45, avgTime: 45, description: "社交推理身份隐藏游戏" },
    { id: 20, name: "The Resistance: Avalon", category: "five-six", minPlayers: 5, maxPlayers: 10, minTime: 30, maxTime: 30, avgTime: 30, description: "亚瑟王主题抵抗组织" },
    
    // 6人以上游戏
    { id: 21, name: "Codenames", category: "six-plus", minPlayers: 2, maxPlayers: 8, minTime: 15, maxTime: 15, avgTime: 15, description: "单词联想猜词游戏" },
    { id: 22, name: "Decrypto", category: "six-plus", minPlayers: 3, maxPlayers: 8, minTime: 15, maxTime: 45, avgTime: 45, description: "团队密码破译游戏" },
    { id: 23, name: "One Night Revolution", category: "six-plus", minPlayers: 3, maxPlayers: 10, minTime: 15, maxTime: 15, avgTime: 15, description: "快速身份推理游戏" },
    { id: 24, name: "Ultimate Werewolf: Deluxe Edition", category: "six-plus", minPlayers: 5, maxPlayers: 75, minTime: 30, maxTime: 30, avgTime: 30, description: "经典狼人杀游戏" },
    { id: 25, name: "Formula D", category: "six-plus", minPlayers: 2, maxPlayers: 10, minTime: 60, maxTime: 60, avgTime: 60, description: "赛车骰子游戏" }
];

// 分类描述
const categoryDescriptions = {
    solo: "适合一个人静静享受的桌游体验，挑战自我，享受思考的乐趣",
    duo: "经典的二人对决，策略与心理的较量，最适合亲密朋友或伴侣",
    four: "最经典的桌游人数配置，平衡性最佳，适合家庭和朋友聚会",
    "five-six": "热闹的聚会选择，社交互动性强，适合多人游戏体验",
    "six-plus": "大型派对游戏，轻松欢乐，支持超多玩家同时参与"
};

// DOM元素
let currentCategory = 'solo';
let currentTimeFilter = 'all';
let currentSort = 'time-asc';
let currentSearch = '';

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    initializePage();
    renderGames();
    setupEventListeners();
});

// 页面初始化
function initializePage() {
    // 设置当前日期
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('currentDate').textContent = now.toLocaleDateString('zh-CN', options);
    
    // 更新统计数据
    updateStats();
    
    // 更新分类计数
    updateCategoryCounts();
}

// 更新统计数据
function updateStats() {
    document.getElementById('total-games').textContent = gamesData.length;
    
    // 计算总时长范围
    let minTime = Infinity;
    let maxTime = 0;
    
    gamesData.forEach(game => {
        if (game.minTime < minTime) minTime = game.minTime;
        if (game.maxTime > maxTime) maxTime = game.maxTime;
    });
    
    document.getElementById('total-time').textContent = `${minTime}-${maxTime}`;
}

// 更新分类计数
function updateCategoryCounts() {
    const categories = ['solo', 'duo', 'four', 'five-six', 'six-plus'];
    
    categories.forEach(category => {
        const count = gamesData.filter(game => game.category === category).length;
        document.getElementById(`count-${category}`).textContent = count;
    });
}

// 设置事件监听器
function setupEventListeners() {
    // 分类标签点击
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', function() {
            // 移除所有激活状态
            document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            // 添加当前激活状态
            this.classList.add('active');
            
            // 更新当前分类
            currentCategory = this.dataset.category;
            
            // 更新分类信息
            updateCategoryInfo();
            
            // 重新渲染游戏
            renderGames();
        });
    });
    
    // 时长筛选
    document.getElementById('timeFilter').addEventListener('change', function() {
        currentTimeFilter = this.value;
        renderGames();
    });
    
    // 排序方式
    document.getElementById('sortBy').addEventListener('change', function() {
        currentSort = this.value;
        renderGames();
    });
    
    // 搜索框
    document.getElementById('searchInput').addEventListener('input', function() {
        currentSearch = this.value.toLowerCase();
        renderGames();
    });
    
    // 弹窗关闭按钮
    document.getElementById('modalClose').addEventListener('click', function() {
        document.getElementById('gameModal').classList.remove('active');
    });
    
    // 点击弹窗外部关闭
    document.getElementById('gameModal').addEventListener('click', function(e) {
        if (e.target === this) {
            this.classList.remove('active');
        }
    });
    
    // ESC键关闭弹窗
    document.addEventListener('keydown', function(e) {
        if