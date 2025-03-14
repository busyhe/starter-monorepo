interface BasicUserInfo {
  avatar: string // 头像
  realName: string // 昵称
  roles?: string[] // 角色
  userId: string // 用户id
  username: string // 用户名
}

/** 用户信息 */
interface UserInfo extends BasicUserInfo {
  /**
   * 用户描述
   */
  desc: string
  /**
   * 首页地址
   */
  homePath: string

  /**
   * accessToken
   */
  token: string
}

export type { UserInfo }
