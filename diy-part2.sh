#!/bin/bash
#
# Copyright (c) 2019-2020 P3TERX <https://p3terx.com>
#
# This is free software, licensed under the MIT License.
# See /LICENSE for more information.
#
# https://github.com/P3TERX/Actions-OpenWrt
# File name: diy-part2.sh
# Description: OpenWrt DIY script part 2 (After Update feeds)
#

# Modify default IP
#sed -i 's/192.168.1.1/192.168.50.5/g' package/base-files/files/bin/config_generate
# 删除原版 luci-app-passwall 软件包
rm -rf feeds/luci/applications/luci-app-passwall

# 将 luci-app-passwall 从 feeds/passwall 复制到 feeds/luci/applications
cp -r feeds/passwall/luci-app-passwall feeds/luci/applications/luci-app-passwall

# 更新并安装 passwall feed 中的所有包
./scripts/feeds update passwall
./scripts/feeds install -a -p passwall

# 安装 feeds/luci/applications 中的 luci-app-passwall
./scripts/feeds install luci-app-passwall
