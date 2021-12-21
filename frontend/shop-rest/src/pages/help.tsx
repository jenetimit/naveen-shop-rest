import Layout from "@components/layout/layout";
import Accordion from "@components/ui/accordion";
import { faq } from "@settings/faq.settings";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Footer from "@components/common/footer";

export default function HelpPage() {
  const { t } = useTranslation();
  return (
    <>
    <section className="py-8 px-4 lg:py-10 lg:px-8 xl:py-14 xl:px-16 2xl:px-20">
      <header className="text-center mb-8">
        <h1 className="font-bold text-xl md:text-2xl xl:text-3xl">
          {t("common:nav-menu-faq")}
        </h1>
      </header>
      <div className="mx-24">
      <h2 className="p-8 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur maxime reprehenderit quibusdam accusamus!<br></br> Nulla eaque incidunt, itaque, exercitationem sint pariatur nobis nostrum libero repellendus totam <br></br>eum obcaecati ducimus, sed mollitia?</h2>
      </div>
    <div className="max-w-screen-lg w-full mx-auto">
        <Accordion items={faq} translatorNS="faq" />
      </div>
    </section>

    <Footer />
    </>
  );
}

HelpPage.Layout = Layout;

export const getStaticProps = async ({ locale }: any) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "faq"])),
    },
  };
};
