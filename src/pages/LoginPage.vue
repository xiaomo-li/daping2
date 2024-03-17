<template>
  <div class="loginPage" :lang="$i18n.locale">
    <div class="top-title">
      {{ $t("common.logoName") }}
    </div>
    <!-- <img src="../assets/login-title.png" alt="" class="top-title" /> -->
    <div class="login-box">
      <img src="../assets/circle.png" alt="" class="circle" />
      <form action="" v-if="currentPage == 'login'">
        <div class="form-item form-item-style1">
          <div class="icon-wrap">
            <img src="../assets/icon-people.png" alt="" class="icon" />
          </div>
          <input
            class="input-style"
            type="text"
            v-model="form.username"
            :placeholder="$t('common.enterUsername')"
            maxlength="30"
          />
        </div>
        <div class="form-item form-item-style1">
          <div class="icon-wrap">
            <img src="../assets/icon-pass.png" alt="" class="icon" />
          </div>
          <input
            class="input-style"
            type="password"
            v-model="form.password"
            :placeholder="$t('common.enterPassword')"
            maxlength="30"
          />
        </div>
        <div class="form-item row1 flex-bet">
          <div class="form-item-style1">
            <div class="icon-wrap">
              <img src="../assets/icon-code.png" alt="" class="icon" />
            </div>
            <input
              class="input-style"
              type="text"
              v-model="form.code"
              :placeholder="$t('common.enterVerificationCode')"
              maxlength="4"
            />
          </div>
          <div class="code-show">2431</div>
        </div>
        <router-link class="btn-style" :to="{ path: '/main' }">{{
          $t("common.login")
        }}</router-link>
        <div class="btn-style" @click="currentPage = 'register'">
          {{ $t("common.register") }}
        </div>
        <div class="flex-bet row2">
          <div @click="form.isRemmember = !form.isRemmember">
            <div class="show-box">
              <img
                v-show="form.isRemmember"
                src="../assets/icon-right.png"
                alt=""
              />
            </div>
            {{ $t("common.rememberPassword") }}
          </div>
          <div @click="changeLocale">
            <img src="../assets/icon-a.png" alt="" class="icon" />
            {{ $t("common.switchLanguage") }}
          </div>
        </div>
      </form>
      <form action="" v-if="currentPage == 'register'">
        <div class="form-item form-item-style1">
          <div class="icon-wrap">
            <img src="../assets/icon-people.png" alt="" class="icon" />
          </div>
          <input
            class="input-style"
            type="text"
            v-model="form.username"
            :placeholder="$t('common.enterUsername')"
            maxlength="30"
          />
        </div>
        <div class="form-item form-item-style1">
          <div class="icon-wrap">
            <img src="../assets/icon-pass.png" alt="" class="icon" />
          </div>
          <input
            class="input-style"
            type="password"
            v-model="form.password"
            :placeholder="$t('common.enterPassword')"
            maxlength="30"
          />
        </div>
        <div class="form-item form-item-style1">
          <div class="icon-wrap">
            <img src="../assets/icon-pass.png" alt="" class="icon" />
          </div>
          <input
            class="input-style"
            type="password"
            v-model="form.password"
            :placeholder="$t('common.comfirmPassword')"
            maxlength="30"
          />
        </div>
        <div class="form-item form-item-style1">
          <div class="icon-wrap">
            <img src="../assets/icon-code.png" alt="" class="icon" />
          </div>
          <input
            class="input-style"
            type="text"
            v-model="form.password"
            :placeholder="$t('common.enterInvitationCode')"
            maxlength="30"
          />
        </div>
        <div class="btn-style" @click="currentPage = 'register'">
          {{ $t("common.register") }}
        </div>
        <div class="btn-style" @click="currentPage = 'login'">
          {{ $t("common.returnToLogin") }}
        </div>
        <div class="flex-bet row2" style="justify-content: center">
          <div @click="form.isRemmember = !form.isRemmember">
            <div class="show-box">
              <img
                v-show="form.isRemmember"
                src="../assets/icon-right.png"
                alt=""
              />
            </div>
            {{ $t("common.rememberPassword") }}
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage: "login",
      form: {
        username: "",
        password: "",
        code: "",
        isRemmember: true,
      },
    };
  },
  methods: {
    changeLocale() {
      this.$i18n.locale == "en-us"
        ? (this.$i18n.locale = "zh-cn")
        : (this.$i18n.locale = "en-us");
    },
  },
};
</script>

<style></style>
