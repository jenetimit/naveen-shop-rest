import { useRouter } from "next/router";
import Navbar from "@components/layouts/navigation/top-navbar";
import { getAuthCredentials, hasAccess } from "@utils/auth-utils";
import SidebarItem from "@components/layouts/navigation/sidebar-item";
import { siteSettings } from "@settings/site.settings";
import { useTranslation } from "next-i18next";

const ShopLayout: React.FC = ({ children }) => {
  const { t } = useTranslation();
  const {
    query: { shop },
  } = useRouter();

  const { permissions: currentUserPermissions } = getAuthCredentials();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col transition-colors duration-150">
      <Navbar />
      <div className="flex flex-1 pt-20">
        <aside className="shadow w-72 xl:w-76 hidden lg:block overflow-y-auto bg-white px-4 fixed start-0 bottom-0 h-full pt-22">
          <div className="flex flex-col space-y-6 py-3">
          {siteSettings.sidebarLinks.admin.map(({ href, label, icon }) => (
                <SidebarItem
                  href={href}
                  label={t(label)}
                  icon={icon}
                  key={href}
                />
              ))}
          </div>
        </aside>
        <main className="w-full lg:ps-72 xl:ps-76">
          <div className="p-5 md:p-8 overflow-y-auto h-full">{children}</div>
        </main>
      </div>
    </div>
  );
};
export default ShopLayout;
