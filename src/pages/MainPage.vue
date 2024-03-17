<template>
  <div class="main-page" :lang="$i18n.locale">
    <!-- 顶部菜单 -->
    <div class="menu-part">
      <div class="logo">
        <img src="../assets/logo.png" alt="" class="icon" />
        {{ $t("common.logoName") }}
      </div>
      <ul class="menu">
        <li>
          <img src="../assets/icon1.png" alt="" class="icon" />
          <p>{{ $t("mainMenu.home") }}</p>
        </li>
        <li @click="currentPop = 'auctionPop'">
          <img src="../assets/icon2.png" alt="" class="icon" />
          <p>{{ $t("mainMenu.auction") }}</p>
        </li>
        <li @click="currentPop = 'recordPop'">
          <img src="../assets/icon3.png" alt="" class="icon" />
          <p>{{ $t("mainMenu.record") }}</p>
        </li>
        <li @click="currentPop = 'accountInfoPop'">
          <img src="../assets/icon4.png" alt="" class="icon" />
          <p>{{ $t("mainMenu.activation") }}</p>
        </li>
        <li @click="currentPop = 'rewardIntro'">
          <img src="../assets/icon5.png" alt="" class="icon" />
          <p>{{ $t("mainMenu.share") }}</p>
        </li>
        <li @click="currentPop = 'customerServicePop'">
          <img src="../assets/icon6.png" alt="" class="icon" />
          <p>{{ $t("mainMenu.customerService") }}</p>
        </li>
      </ul>
      <div class="row">
        <div class="box">
          <img src="../assets/icon8.png" alt="" />
          <div class="infos">
            <div class="text">{{ $t("mainMenu.goldCoinBalance") }}</div>
            <div class="bold">17.97678</div>
          </div>
        </div>
        <div class="sp-relative">
          <div class="box long" @click="showPullList1 = !showPullList1">
            <div class="row">
              <img src="../assets/icon7.png" alt="" />
              <div class="infos">
                <div class="text">{{ $t("mainMenu.accountBalance") }}</div>
                <div class="bold">17.97678</div>
              </div>
            </div>
            <img class="arrow" src="../assets/arrow-d.png" alt="" />
          </div>
          <ul class="pullList" v-show="showPullList1">
            <li @click="currentPop = 'withdrawPop'">
              <img src="../assets/icon-d1.png" alt="" />{{
                $t("mainMenu.rechargeBalance")
              }}
            </li>
            <li @click="currentPop = 'topUpPop'">
              <img src="../assets/icon-d2.png" alt="" />{{
                $t("mainMenu.withDrawBalance")
              }}
            </li>
            <li>
              <img src="../assets/icon-d3.png" alt="" />{{
                $t("mainMenu.transferBalance")
              }}
            </li>
          </ul>
        </div>
        <div class="sp-relative">
          <div class="box long" @click="showPullList2 = !showPullList2">
            <div class="row">
              <img src="../assets/avatar.jpeg" alt="" />
              <div class="infos">
                <div class="bold">zwh20</div>
                <div class="green">·{{ $t("common.loggedIn") }}</div>
              </div>
            </div>
            <img class="arrow" src="../assets/arrow-d.png" alt="" />
          </div>
          <ul class="pullList" v-show="showPullList2">
            <li>
              <img src="../assets/icon-z1.png" alt="" />{{
                $t("common.changePassword")
              }}
            </li>
            <li @click="changeLocale">
              <img src="../assets/icon-z2.png" alt="" />{{
                $t("common.switchLanguage")
              }}
            </li>
            <li @click="currentPop = 'customerServicePop'">
              <img src="../assets/icon-z3.png" alt="" />{{
                $t("common.personalAccountManager")
              }}
            </li>

            <router-link :to="{ path: '/' }"
              ><li>
                <img src="../assets/icon-z4.png" alt="" />{{
                  $t("common.signOut")
                }}
              </li></router-link
            >
          </ul>
        </div>
      </div>
    </div>
    <!-- 主内容 -->
    <div class="main-part">
      <div class="side-part">
        <div
          class="box-wrap"
          v-for="(item, index) in controlBox"
          :key="index"
          @click="currentControlBoxIndex = index"
        >
          <div class="box-name">
            {{ $t("main.number", [index + 1]) }}
            {{ $t("main.console") }}
            <!-- {{ index + 1 }}号 控制台 -->
          </div>
          <div class="box-type" :class="item.type == 1 ? '' : 'red'">
            {{ item.type == 1 ? $t("main.running") : $t("main.waiting") }}
          </div>
          <div class="num-bg">{{ $t("main.number", [index + 1]) }}</div>
        </div>
        <div class="box-wrap type showing">
          <div class="box-name">{{ $t("main.startOperation") }}</div>
          <div class="num-bg">{{ $t("main.startOperation") }}</div>
          <div class="line"></div>
        </div>
        <div class="box-wrap type">
          <div class="box-name">{{ $t("main.stopRunning") }}</div>
          <div class="num-bg">{{ $t("main.stopRunning") }}</div>
          <div class="line"></div>
        </div>
      </div>
      <div class="center-part">
        <div class="announce-wrap row sp_bg">
          <img src="../assets/icon-voice.png" alt="" />
          <span>{{ $t("main.announcement") }} ：</span>
          <div class="p_wrap">
            <p :style="{ marginLeft: announceLeft + 'px' }">
              {{ $t("main.announcementContent") }}
            </p>
          </div>
        </div>

        <div
          class="sp_bg hot-box"
          v-show="controlBox[currentControlBoxIndex].type == 1"
        >
          <!-- <img src="../assets/game.jpeg" alt="" /> -->
          <img
            src="https://gif-1300123308.cos.ap-nanjing.myqcloud.com/11/1123.gif"
            alt=""
          />
        </div>
        <div
          class="sp_bg hot-box"
          v-show="controlBox[currentControlBoxIndex].type == 0"
        >
          <!-- <div class="title-wrap">
            <h1>热门推荐</h1>
            <div class="blue-btn">换一换</div>
          </div> -->
          <div class="hot-box_null">
            <img src="../assets/null_bg2.png" alt="" />
          </div>
        </div>
        <div class="sp_bg table-part">
          <h1>{{ $t("main.controlCenterPartTitle") }}</h1>
          <div v-show="controlBox[currentControlBoxIndex].type == 1">
            <div class="table_wrap">
              <table class="table table1">
                <thead>
                  <tr>
                    <td>{{ $t("table.time") }}</td>
                    <td>{{ $t("table.thread") }}</td>
                    <td>{{ $t("table.operate") }}</td>
                    <td>{{ $t("table.state") }}</td>
                    <td>{{ $t("table.sendTo") }}</td>
                    <td>{{ $t("table.rest") }}</td>
                  </tr>
                </thead>
                <tbody ref="wrapper">
                  <tr v-for="(item, index) in table1" :key="index">
                    <td>{{ item.time }}</td>
                    <td>{{ item.line }}</td>
                    <td>{{ $t(item.session, ["session"]) }}</td>
                    <td>{{ $t(item.type, ["wXilISak9"]) }}</td>
                    <td>{{ $t(item.send, ["RuKcGuVo"]) }}</td>
                    <td>{{ $tc(item.interval, 4, [4]) }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div
            class="null_control"
            v-show="controlBox[currentControlBoxIndex].type == 0"
          >
            <img src="../assets/null_bg1.png" alt="" />
          </div>
        </div>
      </div>
    </div>

    <!-- 弹窗部分 -->
    <div class="sp_mask" v-show="currentPop !== ''">
      <!-- 弹窗——推荐有奖 -->
      <div class="sp_pop" v-show="currentPop == 'rewardIntro'">
        <img
          @click="currentPop = ''"
          src="../assets/icon-close.png"
          alt=""
          class="close-btn"
        />
        <h1>{{ $t("main.recommendedAndRewarded") }}</h1>
        <div class="sub-title">
          {{ $t("main.recommendedIntro") }}
          <!-- 好友安装助手后，填写您的ID<span>12345</span>
          即算推荐成功;当其每次获得会员，您均可薅取<span>20%</span>的时长!永久有效! -->
        </div>
        <div class="blue-btn btn-style">{{ $t("main.agencyRules") }}</div>
        <div class="content">
          <div>
            <div class="box_bg">
              <div class="box_name">
                {{ $t("main.successfullyRecommended") }}
              </div>
              <div class="sub-text">Successful recommendation</div>
              <div class="box_info"><span class="num">0</span>人</div>
            </div>
            <div class="box_bg">
              <div class="box_name">{{ $t("main.memberRewards") }}</div>
              <div class="sub-text">Member rewards</div>
              <div class="box_info">
                <span class="num">0</span>{{ $tc("common.hour") }}
              </div>
            </div>
            <div class="box_bg">
              <div class="box_name">{{ $t("main.agentRewards") }}</div>
              <div class="sub-text">Agency Rewards</div>
              <div class="box_info"><span class="num">0</span>$</div>
            </div>
          </div>
          <div class="box_bg box_bg2">
            <div class="box_name">
              {{ $t("main.myReward") }} ({{ $t("main.myRewardTip") }} )
            </div>
            <div class="sub-text">My rewards (only show the last 10)</div>
            <div class="table-wrap" v-if="poptable1.length > 0">
              <table class="table table2">
                <thead>
                  <tr>
                    <td>{{ $t("main.username") }}</td>
                    <td>{{ $t("main.registrationTime") }}</td>
                    <td>{{ $t("main.memberRewards") }}</td>
                    <td>{{ $t("main.agentRewards") }}</td>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in poptable1" :key="index">
                    <td>{{ item.userName }}</td>
                    <td>{{ item.registerTime }}</td>
                    <td>{{ $tc(item.memberRewards, 4, [4]) }}</td>
                    <td>{{ item.agentRewards }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div
              class="flex-center null_table"
              v-else-if="poptable1.length == 0"
            >
              <img src="../assets/bg-partten.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <!-- 弹窗——账户信息 -->
      <div
        class="sp_pop accountInfoPop"
        v-show="currentPop == 'accountInfoPop'"
        style="width: 1413px"
      >
        <img
          @click="currentPop = ''"
          src="../assets/icon-close.png"
          alt=""
          class="close-btn"
        />
        <h1>{{ $t("main.accountInfo") }}</h1>
        <div class="content">
          <div class="box_style long">
            <div class="box_name">{{ $t("main.ordinaryMember") }}</div>
            <p>
              {{ $t("mainMenu.accountBalance") }}:17.98988
              <img src="../assets/icon-eye.png" alt="" />
            </p>
            <p class="text2">
              {{ $t("main.registrationTime") }}:2024-03-11-15:15:02
            </p>
          </div>
          <div class="box_style">
            <div class="box_name">{{ $t("main.consoleRevenue") }}(1-10)</div>
            <p>{{ $t("main.todaytotalIncome") }} :11.1234</p>
            <p>{{ $t("main.historicalTotalIncome") }} :11.1234</p>
            <p>
              {{ $t("main.totalControls") }}:{{ $tc("main.tower", 8, [8]) }}
            </p>

            <img class="right-icon" src="../assets/icon10.png" alt="" />
          </div>
          <div class="box_style" v-for="(item, index) in 8" :key="index">
            <div class="box_name">
              {{ $t("main.number", [index + 1]) }}({{ $t("main.console") }})
            </div>
            <p></p>
            <p>{{ $t("main.activationTime") }}:2024-03-11 15:15:02</p>
            <img class="left-icon" src="../assets/icon-win.png" alt="" />
            <div class="right-btn" @click="currentPop = 'buyRememberPop'">
              {{ $t("main.renewal") }}
            </div>
          </div>
          <div class="box_style gray">
            <div class="box_name">
              {{ $t("main.number", [9]) }}({{ $t("main.inactivated") }} )
            </div>
            <p></p>
            <p></p>
            <img class="left-icon" src="../assets/icon-suo.png" alt="" />
            <div class="right-btn" @click="currentPop = 'buyRememberPop'">
              {{ $t("main.activation") }}
            </div>
          </div>
          <div class="box_style gray">
            <div class="box_name">
              {{ $t("main.number", [10]) }}({{ $t("main.inactivated") }})
            </div>
            <p></p>
            <p></p>
            <img class="left-icon" src="../assets/icon-suo.png" alt="" />
            <div class="right-btn" @click="currentPop = 'buyRememberPop'">
              {{ $t("main.activation") }}
            </div>
          </div>
          <div class="box_style ready">
            <img src="../assets/wait.png" alt="" />
          </div>
        </div>
      </div>

      <!-- 弹窗——拍卖 -->
      <div class="sp_pop auctionPop" v-show="currentPop == 'auctionPop'">
        <img
          @click="currentPop = ''"
          src="../assets/icon-close.png"
          alt=""
          class="close-btn"
        />
        <h1>{{ $t("main.auction") }}</h1>

        <div class="content">
          <div class="box_bg2 box_wrap1">
            <div class="box_name">
              <img src="../assets/paimai.png" alt="" class="icon" />{{
                $t("main.auctionItems")
              }}
            </div>
            <form
              action="
            "
            >
              <div class="input_group">
                <div class="name_row">
                  <img src="../assets/paimai1.png" alt="" class="icon" />
                  {{ $t("mainMenu.goldCoinBalance") }}
                </div>
                <input
                  type="text"
                  class="input box-bg-s"
                  v-model="auctionForm.doller"
                />
              </div>
              <div class="input_group">
                <div class="name_row">
                  <img src="../assets/paimai1.png" alt="" class="icon" />
                  {{ $t("main.AuctionQuantity") }}
                </div>
                <input
                  type="text"
                  class="input box-bg-s"
                  v-model="auctionForm.auctionNumber"
                  :placeholder="$t('main.enterPrice')"
                />
              </div>
              <div class="input_tip">
                <p>{{ $t("main.proposedPrice") }}:1000~100USDT</p>
                <p>{{ $t("main.total") }} :1000~100USDT</p>
              </div>
              <div class="input_group">
                <div class="name_row">
                  <img src="../assets/paimai1.png" alt="" class="icon" />
                  {{ $t("main.fixedPrice") }}(usdt)
                </div>
                <input
                  type="text"
                  class="input box-bg-s"
                  v-model="auctionForm.price"
                  :placeholder="$t('main.enterPrice')"
                />
              </div>
              <div class="input_group">
                <div class="name_row">
                  <img src="../assets/paimai2.png" alt="" class="icon" />
                  {{ $t("main.auctionLimitedTime") }}
                </div>
                <div class="box-bg-s time-btns flex-center">
                  <div
                    class="time-btn flex-center"
                    v-for="(item, index) in auctionTime"
                    :key="index"
                    @click="auctionForm.time = index"
                    :class="auctionForm.time == index ? 'active' : ''"
                  >
                    {{ $tc("common." + item.unit, item.value, [item.value]) }}
                  </div>
                </div>
              </div>
              <p class="tip flex-center">
                {{ $t("main.auctionHandlingFree") }} :20.00 USDT
              </p>
              <div class="flex-center auction-btn">
                {{ $t("main.startAuction") }}
              </div>
            </form>
          </div>

          <div class="box_wrap2">
            <div class="menu_tabs">
              <div
                class="menu_tab"
                v-for="(item, index) in auctionMenu"
                :key="item"
                @click="currentAuctionMenuIndex = index"
                :class="currentAuctionMenuIndex == index ? 'active' : ''"
              >
                {{ $t("main." + item) }}
              </div>
            </div>
            <template v-if="currentAuctionMenuIndex == 1">
              <div class="box_bg2 table-wrap" v-if="poptable2.length > 0">
                <table class="table table2">
                  <thead>
                    <tr>
                      <td>{{ $t("main.icon") }}</td>
                      <td>{{ $t("main.name") }}</td>
                      <td>{{ $t("main.quantity") }}</td>
                      <td>{{ $t("main.timeLeft") }}</td>
                      <td>{{ $t("main.walletAddress") }}</td>
                      <td>{{ $t("main.fixedPrice") }}</td>
                      <td>{{ $t("main.revise") }}</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in poptable2" :key="index">
                      <td><img class="icon" :src="item.icon" alt="" /></td>
                      <td>{{ $t(item.name) }}</td>
                      <td>{{ item.number }}</td>
                      <td>{{ $t(item.timeLeft) }}</td>
                      <td>{{ item.area }}</td>
                      <td>{{ item.price }}</td>
                      <td>
                        <!-- <div class="btn">{{ item.operate }}</div> -->
                        <div class="btn">{{ $t("main.revise") }}</div>
                        <div class="btn">{{ $t("main.remove") }}</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div class="page-style-wrap">
                  <div class="page-style">
                    <div class="sp_border">
                      <div
                        class="arrow arrow-prev"
                        v-on:click="prevList"
                        :class="listFirst == 1 ? '' : 'active'"
                      ></div>
                    </div>
                    <div class="sp_border page_info">
                      <span>{{ listFirst }}/1</span>
                    </div>
                    <div class="sp_border">
                      <div
                        class="arrow arrow-next"
                        v-on:click="nextList"
                        :class="listLast == poptable2.length ? '' : 'active'"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="box_bg2 flex-center null_table"
                v-else-if="poptable2.length == 0"
              >
                <img src="../assets/bg-partten.png" alt="" />
              </div>
            </template>
            <template v-if="currentAuctionMenuIndex == 0">
              <div class="box_bg2 table-wrap flex-center null_table">
                <img src="../assets/bg-partten.png" alt="" />
              </div>
            </template>
          </div>
        </div>
      </div>
      <!-- 弹窗——记录 -->
      <div class="sp_pop recordPop" v-show="currentPop == 'recordPop'">
        <img
          @click="currentPop = ''"
          src="../assets/icon-close.png"
          alt=""
          class="close-btn"
        />

        <div class="menu_tabs">
          <div
            class="menu_tab"
            v-for="(item, index) in recordMenu"
            :key="index"
            @click="currentRecordMenuIndex = index"
            :class="currentRecordMenuIndex == index ? 'active' : ''"
          >
            {{ $t(item) }}
          </div>
        </div>
        <div class="box_wrap2" v-if="currentRecordMenuIndex == 0">
          <div class="box_bg2 table-wrap" v-if="poptable3.length > 0">
            <!-- <table class="table table2">
              <thead>
                <tr>
                  <td>交易类型</td>
                  <td>交易方式</td>
                  <td>提款余额</td>
                  <td>状态</td>
                  <td>日期</td>
                  <td>操作</td>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in poptable4" :key="index">
                  <td>{{ item.style }}</td>
                  <td>{{ item.way }}</td>
                  <td>{{ item.remain }}</td>
                  <td>{{ item.state }}</td>
                  <td>{{ item.date }}</td>
                  <td>
                    <div class="btn">{{ item.operate }}</div>
                  </td>
                </tr>
              </tbody>
            </table> -->
            <el-table
              :data="poptable3"
              style="width: 100%"
              header-row-class-name="ele_head"
              row-class-name="ele_row"
              cell-class-name="ele_cell"
              height="100%"
              scrollbar-always-on
              :row-style="{ height: '48px' }"
            >
              <el-table-column
                prop="style"
                :label="$t('main.transactionType')"
              />
              <el-table-column
                prop="way"
                :label="$t('main.transactionMeans')"
              />
              <el-table-column
                prop="remain"
                :label="$t('main.withdrawBalance')"
              />
              <el-table-column prop="state" :label="$t('table.state')" />
              <el-table-column prop="date" :label="$t('table.date')" />
            </el-table>
          </div>
          <div
            class="box_bg2 flex-center null_table"
            v-else-if="poptable3.length == 0"
          >
            <img src="../assets/bg-partten.png" alt="" />
          </div>
        </div>
        <div class="box_wrap2" v-if="currentRecordMenuIndex == 1">
          <div class="box_bg2 table-wrap" v-if="poptable4.length > 0">
            <el-table
              :data="poptable4"
              style="width: 100%"
              header-row-class-name="ele_head"
              row-class-name="ele_row"
              cell-class-name="ele_cell"
              height="100%"
              scrollbar-always-on
              :row-style="{ height: '48px' }"
            >
              <el-table-column
                prop="style"
                :label="$t('main.transactionType')"
              />
              <el-table-column
                prop="way"
                :label="$t('main.transactionMeans')"
              />
              <el-table-column
                prop="remain"
                :label="$t('main.withdrawBalance')"
              />
              <el-table-column prop="state" :label="$t('table.state')" />
              <el-table-column prop="date" :label="$t('table.date')" />
            </el-table>
            <!-- <table class="table table2">
              <thead>
                <tr>
                  <td>交易类型</td>
                  <td>交易方式</td>
                  <td>提款余额</td>
                  <td>状态</td>
                  <td>日期</td>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in poptable4" :key="index">
                  <td>{{ item.style }}</td>
                  <td>{{ item.way }}</td>
                  <td>{{ item.remain }}</td>
                  <td>{{ item.state }}</td>
                  <td>{{ item.date }}</td>
                  <td>
                    <div class="btn">{{ item.operate }}</div>
                  </td>
                </tr>
              </tbody>
            </table> -->
          </div>
          <div
            class="box_bg2 flex-center null_table"
            v-else-if="poptable4.length == 0"
          >
            <img src="../assets/bg-partten.png" alt="" />
          </div>
        </div>
      </div>

      <!-- 弹窗——购买会员 -->
      <div
        class="sp_pop buyRememberPop"
        v-show="currentPop == 'buyRememberPop'"
      >
        <img
          @click="currentPop = ''"
          src="../assets/icon-close.png"
          alt=""
          class="close-btn"
        />
        <h1>{{ $t("main.buyMembership") }}</h1>

        <div class="content">
          <div class="box_bg2 box_wrap1">
            <img class="avater-img" src="../assets/avatar.jpeg" alt="" />
            <div class="userName">wd8888</div>
            <div class="userId">ID: 308</div>
            <div class="remType">
              <img src="../assets/icon-type1.png" alt="" class="icon" />{{
                $t("main.platinumMember")
              }}
            </div>
            <div class="doller">
              {{ $t("main.balance") }}: $3216.93769
              <img src="../assets/icon-refresh.png" alt="" class="icon" />
            </div>

            <div
              class="flex-center shop_btn"
              @click="currentPop = 'withdrawPop'"
            >
              {{ $t("main.clickToRecharge") }}
            </div>
          </div>

          <div class="box_bg2 box_wrap2">
            <div class="cambo-group">
              <div
                class="cambo"
                :class="camboListIndex == index ? 'active' : ''"
                v-for="(item, index) in camboList"
                :key="index"
                @click="camboListIndex = index"
              >
                <div class="date">
                  {{ $t("main." + item.date.unit, [item.date.value]) }}
                </div>
                <div class="text1">{{ item.every }}</div>
                <div class="text2">
                  {{ $t("main.converted") }} {{ item.price }}/
                  {{ $t("main.day") }}
                </div>
                <div class="brand" v-show="item.brand !== ''">
                  <p :data-title="item.brand">{{ item.brand }}</p>
                </div>
              </div>
            </div>
            <div class="pay-title">{{ $t("main.paymentMethod") }} ：</div>
            <div class="box_wrap2 pay-item">
              <div class="circle"></div>
              <img src="../assets/green-icon.png" alt="" class="icon" />
              <p>USDT-TRC20</p>
            </div>
            <div class="total">
              {{ $t("main.orderTotal") }}:<span>USD53.99</span>
            </div>
            <div class="blue-btn flex-center">{{ $t("main.payment") }}</div>
          </div>
        </div>
      </div>
      <!-- 弹窗——充值 -->
      <div class="sp_pop withdrawPop" v-show="currentPop == 'withdrawPop'">
        <img
          @click="currentPop = ''"
          src="../assets/icon-close.png"
          alt=""
          class="close-btn"
        />
        <h1>
          <img src="../assets/icon-pay.png" alt="" />
          {{ $t("main.pay", ["USDT-TRC20"]) }}
        </h1>

        <div class="">
          <div class="box_bg2 box_wrap">
            <img src="../assets/qr-code.png" alt="" class="code-img" />
            <div class="copy_area">
              {{ $t("main.address") }}:<span>{{ copyArea }}</span>
              <div
                class="copy-btn"
                v-clipboard="copyArea"
                v-clipboard:success="clipboardSuccessHandler"
                v-clipboard:error="clipboardErrorHandler"
              >
                <img
                  src="../assets/icon-copy-blue.png"
                  alt=""
                  class="code-img"
                />{{ $t("main.copyAddress") }}
              </div>
            </div>
            <div class="blue-btn flex-center btn1">
              <img src="../assets/icon-sao.png" alt="" class="code-img" />
              {{ $t("main.paymentTip") }}
            </div>
            <div class="input_group">
              <div class="input-name">{{ $t("main.rechargeAmount") }}：</div>
              <input
                type="number"
                class="input box-bg-s"
                :placeholder="$t('main.EnterTransferredAmount')"
              />
              <div class="blue-btn flex-center">
                {{ $t("main.submitRecharge") }}
              </div>
            </div>
            <div class="tip1">{{ $t("main.paymentLimitTip") }}！！！</div>
          </div>
          <div class="tip">
            <p>{{ $t("main.paymentAreaTip") }}</p>
            <p>
              {{ $t("main.payConfirmTip") }}
            </p>
            <p>{{ $t("main.confirmAreaCorrectly") }}</p>
            <p>{{ $t("main.notRepeatedSubmit") }}</p>
            <p>{{ $t("main.ContantCustomerServiceTip") }}</p>
          </div>
        </div>
      </div>
      <!-- 弹窗——提现 -->
      <div class="sp_pop topUpPop" v-show="currentPop == 'topUpPop'">
        <img
          @click="currentPop = ''"
          src="../assets/icon-close.png"
          alt=""
          class="close-btn"
        />
        <h1>{{ $t("main.withdrawMoney") }}</h1>

        <div class="">
          <div class="box_bg2 box_wrap">
            <div class="text1">
              {{ $t("mainMenu.accountBalance") }}: <span>$3216.93769</span>
            </div>
            <div class="copy_area">
              {{ $t("main.paymentWalletAddress") }}:
              <input
                type="text"
                :disabled="copyArea2Type"
                v-model="copyArea2"
              />
              <div
                class="copy-btn"
                v-clipboard="copyArea2"
                v-clipboard:success="clipboardSuccessHandler"
                v-clipboard:error="clipboardErrorHandler"
              >
                <img
                  src="../assets/icon-copy-blue.png"
                  alt=""
                  class="code-img"
                />{{ $t("main.copy") }}
                <img
                  src="../assets/icon-change.png"
                  alt=""
                  class="code-img"
                  @click="copyArea2Type = false"
                />{{ $t("main.revise") }}
              </div>
            </div>

            <div class="input_group">
              <div class="input-name">{{ $t("main.withdrawalAmount") }}：</div>
              <input
                type="number"
                class="input box-bg-s"
                :placeholder="$t('main.enterWithdrawMoney')"
              />
            </div>
          </div>
          <div class="tip">
            <p>{{ $t("main.warmReminderTime") }}</p>
          </div>
          <div class="blue-btn flex-center">
            {{ $t("main.submitApplication") }}
          </div>
        </div>
      </div>
      <!-- 弹窗 ——客服 -->
      <div
        class="sp_pop customerServicePop"
        v-show="currentPop == 'customerServicePop'"
      >
        <img
          @click="currentPop = ''"
          src="../assets/icon-close.png"
          alt=""
          class="close-btn"
        />
        <h1>{{ $t("common.personalAccountManager") }}</h1>

        <div class="content">
          <div class="box_bg box1">
            <div
              class="text_wrap"
              v-for="(item, index) in kefuList"
              :key="index"
            >
              <div class="infos">
                <img src="../assets/icon-qq.png" alt="" class="icon" /><span
                  >{{ $t("main." + item.name) }}：</span
                ><strong>{{
                  item.phone == "main.name1" ? $t(item.phone) : item.phone
                }}</strong>
              </div>

              <div class="copy-btn" v-clipboard="item.phone">
                <img src="../assets/icon-copy.png" alt="" />{{
                  $t("main.copy")
                }}
              </div>
            </div>
          </div>
          <div class="box_bg box2">
            <div class="box_name">
              {{ $t("main.onlineCustomerServiceTime") }}
            </div>
            <div class="img-group">
              <div>
                <img src="../assets/icon-kefu.png" alt="" class="icon" />
                <p>{{ $t("main.onlineService") }}</p>
              </div>
              <div>
                <img src="../assets/icon-wechat.png" alt="" class="icon" />
                <p>{{ $t("main.weChat") }}</p>
              </div>
              <div>
                <img src="../assets/icon-tele.png" alt="" class="icon" />
                <p>Telegram</p>
              </div>
              <div>
                <img src="../assets/icon-app.png" alt="" class="icon" />
                <p>WhatsApp</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainPage",

  data() {
    return {
      // 当前弹窗：
      // 分享 rewardIntro 推荐有奖
      // 激活：accountInfoPop 账户信息
      // 拍卖：auctionPop finish_页码需整理
      // 记录：recordPop 有两个表格，引用了ele
      // 购买会员：buyRememberPop
      // 提现：topUpPop
      // 充值：withdrawPop
      // 客服：customerServicePop
      currentPop: "",

      currentIndex: 0,

      intervalId: null,
      animationDuration: 2000, // Adjust the animation duration as needed (in milliseconds)
      itemHeight: 48,

      // 正在运行的控制台
      currentControlBoxIndex: 0,
      // 左侧控制台 0等待中 1运行中
      controlBox: [
        {
          boxName: "号 控制台",
          type: 1,
        },
        {
          boxName: "号 控制台",
          type: 0,
        },
        {
          boxName: "号 控制台",
          type: 1,
        },
        {
          boxName: "号 控制台",
          type: 1,
        },
        {
          boxName: "号 控制台",
          type: 1,
        },
        {
          boxName: "号 控制台",
          type: 1,
        },
        {
          boxName: "号 控制台",
          type: 1,
        },
        {
          boxName: "号 控制台",
          type: 1,
        },
        {
          boxName: "号 控制台",
          type: 1,
        },
        {
          boxName: "号 控制台",
          type: 1,
        },
      ],
      scrollTop: 0,
      // 主页表格
      table1: [
        {
          time: "121:06:32",
          line: "177:+1586783926",
          session: "table.addContacts",
          type: "table.success",
          send: "table.toUser",
          interval: "common.second",
        },
        {
          time: "121:06:32",
          line: "177:+1586783926",
          session: "table.addContacts",
          type: "table.success",
          send: "table.toUser",
          interval: "common.second",
        },
        {
          time: "121:06:32",
          line: "177:+1586783926",
          session: "table.addContacts",
          type: "table.success",
          send: "table.toUser",
          interval: "common.second",
        },
        {
          time: "121:06:32",
          line: "177:+1586783926",
          session: "table.addContacts",
          type: "table.success",
          send: "table.toUser",
          interval: "common.second",
        },
        {
          time: "121:06:32",
          line: "177:+1586783926",
          session: "table.addContacts",
          type: "table.success",
          send: "table.toUser",
          interval: "common.second",
        },
        {
          time: "121:06:32",
          line: "177:+1586783926",
          session: "table.addContacts",
          type: "table.success",
          send: "table.toUser",
          interval: "common.second",
        },
        {
          time: "121:06:32",
          line: "177:+1586783926",
          session: "table.addContacts",
          type: "table.success",
          send: "table.toUser",
          interval: "common.second",
        },
      ],
      // 分享——推荐有奖表格
      poptable1: [
        {
          userName: "111",
          registerTime: "2024-2-10 12:14:51",
          memberRewards: "common.hour",
          agentRewards: "0$",
        },
        {
          userName: "111",
          registerTime: "2024-2-10 12:14:51",
          memberRewards: "common.hour",
          agentRewards: "0$",
        },
        {
          userName: "111",
          registerTime: "2024-2-10 12:14:51",
          memberRewards: "common.hour",
          agentRewards: "0$",
        },
        {
          userName: "111",
          registerTime: "2024-2-10 12:14:51",
          memberRewards: "common.hour",
          agentRewards: "0$",
        },
      ],

      // 拍卖行——选择按钮
      auctionTime: [
        { value: 8, unit: "hour" },
        { value: 24, unit: "hour" },
        { value: 48, unit: "hour" },
      ],

      // 拍卖行——填写表单信息
      auctionForm: {
        doller: 188.8,
        auctionNumber: null,
        price: null,
        time: 0,
      },
      auctionMenu: ["marketHall", "myAuction"],
      currentAuctionMenuIndex: 1,
      // 拍卖行页码
      // 从第几页
      listFirst: 1,
      // 到第几页
      listLast: null,
      // 每页展示数量
      listEvery: 10,
      // 当前展示数据
      currentList: null,
      // 拍卖行表格
      poptable2: [
        {
          icon: require("../assets/paimai3.png"),
          name: "main.equipName1",
          number: "40",
          timeLeft: "main.long",
          area: "Tsu****jjn",
          price: "21",
        },
        {
          icon: require("../assets/paimai3.png"),
          name: "main.equipName1",
          number: "40",
          timeLeft: "main.long",
          area: "Tsu****jjn",
          price: "21",
        },
        {
          icon: require("../assets/paimai3.png"),
          name: "main.equipName1",
          number: "40",
          timeLeft: "main.long",
          area: "Tsu****jjn",
          price: "21",
        },
      ],
      // 记录——菜单
      recordMenu: ["main.exchangeRecord", "main.rechargeRecord"],
      currentRecordMenuIndex: 0,
      // 兑换记录——表格
      poptable3: [
        {
          style:
            this.$i18n.locale == "en-us" ? this.$t("main.withdraw") : "提现",
          way: "USDT",
          remain: "2710.00000",
          state: this.$i18n.locale == "en-us" ? this.$t("main.paid") : "已打款",
          date: "2024-01-26 15:31:16",
        },
        {
          style:
            this.$i18n.locale == "en-us" ? this.$t("main.withdraw") : "提现",
          way: "USDT",
          remain: "2710.00000",
          state: this.$i18n.locale == "en-us" ? this.$t("main.paid") : "已打款",
          date: "2024-01-26 15:31:16",
        },
        {
          style:
            this.$i18n.locale == "en-us" ? this.$t("main.withdraw") : "提现",
          way: "USDT",
          remain: "2710.00000",
          state: this.$i18n.locale == "en-us" ? this.$t("main.paid") : "已打款",
          date: "2024-01-26 15:31:16",
        },
        {
          style:
            this.$i18n.locale == "en-us" ? this.$t("main.withdraw") : "提现",
          way: "USDT",
          remain: "2710.00000",
          state: this.$i18n.locale == "en-us" ? this.$t("main.paid") : "已打款",
          date: "2024-01-26 15:31:16",
        },
      ],
      // 充值记录——表格
      poptable4: [
        {
          style: this.$i18n.locale == "en-us" ? this.$t("main.topUp") : "充值",
          way: "USDT",
          remain: "2710.00000",
          state: this.$i18n.locale == "en-us" ? this.$t("main.paid") : "已打款",
          date: "2024-01-26 15:31:16",
        },
        {
          style: this.$i18n.locale == "en-us" ? this.$t("main.topUp") : "充值",
          way: "USDT",
          remain: "2710.00000",
          state: this.$i18n.locale == "en-us" ? this.$t("main.paid") : "已打款",
          date: "2024-01-26 15:31:16",
        },
        {
          style: this.$i18n.locale == "en-us" ? this.$t("main.topUp") : "充值",
          way: "USDT",
          remain: "2710.00000",
          state: this.$i18n.locale == "en-us" ? this.$t("main.paid") : "已打款",
          date: "2024-01-26 15:31:16",
        },
        {
          style: this.$i18n.locale == "en-us" ? this.$t("main.topUp") : "充值",
          way: "USDT",
          remain: "2710.00000",
          state: this.$i18n.locale == "en-us" ? this.$t("main.paid") : "已打款",
          date: "2024-01-26 15:31:16",
        },
        {
          style: this.$i18n.locale == "en-us" ? this.$t("main.topUp") : "充值",
          way: "USDT",
          remain: "2710.00000",
          state: this.$i18n.locale == "en-us" ? this.$t("main.paid") : "已打款",
          date: "2024-01-26 15:31:16",
        },
      ],

      // 客服——购买会员
      camboList: [
        {
          date: { value: 12, unit: "months" },
          every: "USD 53.99",
          price: "USD 0.15",
          brand: "-66%",
        },
        {
          date: { value: 3, unit: "months" },
          every: "USD 15.49",
          price: "USD 0.17",
          brand: "-61%",
        },
        {
          date: { value: 1, unit: "months" },
          every: "USD 6.69",
          price: "USD 0.22",
          brand: "-50%",
        },
        {
          date: { value: 1, unit: "week" },
          every: "USD 2.99",
          price: "USD 0.43",
          brand: "",
        },
      ],
      camboListIndex: 0,
      // 购买会员——复制地址
      copyArea: "0xb28.b3c.3602df.71004326f57。..69,973be61",
      copyArea2: "TQ9dNxv8mv1qMv9QAUtwcHme1BUzgWqZ7G",
      copyArea2Type: true,
      announceLeft: 0,
      announceTimer: null,
      kefuList: [
        {
          name: "customerServiceQQ",
          phone: "main.name1",
        },
        {
          name: "investmentQQ",
          phone: "15902059193",
        },
        {
          name: "financialQQ",
          phone: "3007326032",
        },
        {
          name: "technologyQQ",
          phone: "3007326032",
        },
      ],
      showPullList1: false,
      showPullList2: false,
    };
  },
  mounted() {
    this.startLoop();
    this.computedListLast();
    let that = this;
    this.announceTimer = setInterval(function () {
      that.announceLeft -= 1;
      if (that.announceLeft <= -500) {
        that.announceLeft = 1200;
      }
    }, 100);
  },
  computed: {},
  methods: {
    changeLocale() {
      this.$i18n.locale == "en-us"
        ? (this.$i18n.locale = "zh-cn")
        : (this.$i18n.locale = "en-us");
    },
    clipboardSuccessHandler(event) {
      console.log("success", event);
    },
    //定义复制成功的回调方法
    clipboardErrorHandler(event) {
      console.log("error", event);
    },

    startLoop() {
      this.intervalId = setInterval(() => {
        this.updateVisibleItems();

        this.table1.push(this.table1[0]);
      }, this.animationDuration);
    },

    updateVisibleItems() {
      const tableLength = this.table1.length;
      if (tableLength > 0) {
        this.animateScroll();
        this.currentIndex++;
        if (this.currentIndex - 10 == this.table1.length) {
          this.currentIndex = 0;
        }
      }
    },
    animateScroll() {
      const container = document.querySelector(".table tbody");
      const newItemTop = this.currentIndex * this.itemHeight;
      container.style.transition = `transform ${
        this.animationDuration / 1000
      }s linear`;
      container.style.transform = `translateY(-${newItemTop}px)`;
    },

    // 弹窗页码
    // 初始化数据
    initList() {
      this.currentList = this.poptable2.slice(
        this.listFirst - 1,
        this.listLast
      );
    },
    //   处理页码
    nextList() {
      if (this.listFirst + this.listEvery <= this.poptable2.length) {
        this.listFirst += this.listEvery;
      }
      this.computedListLast();
    },
    prevList() {
      if (this.listFirst - this.listEvery >= 1) {
        this.listFirst -= this.listEvery;
      } else {
        this.listFirst = 1;
      }
      this.computedListLast();
    },
    computedListLast() {
      this.listLast =
        this.listFirst + this.listEvery > this.poptable2.length
          ? this.poptable2.length
          : this.listFirst - 1 + this.listEvery;
      this.initList();
    },

    // async getList(info) {
    //   try {
    //     const res = await getList({
    //       serial: info.name,
    //       page: info.currentPage,
    //       page_rows: 1,
    //     });

    //     let data = res.data.data;
    //     info.total = data.total;
    //     if (data.list[0] && data.list[0].iot_device_name) {
    //       this.getInfo(info, data.list[0].iot_device_name);
    //
    //     }
    //   } catch (error) {
    //     console.log(error);
    //   }
    // },

    // handleTime(time) {
    //   const date = new Date(time * 1000);
    //   const hour = this.fixedNum(date.getHours());
    //   const minute = this.fixedNum(date.getMinutes());
    //   return hour + ":" + minute;
    // },
    // fixedNum(num) {
    //   let result = num.toString().split("");
    //   while (result.length < 2) {
    //     result.unshift("0");
    //   }
    //   result = result.join("");
    //   return result;
    // },
  },
  beforeUnmount() {
    clearInterval(this.intervalId);
  },
};
</script>
