"use client";

import EditorPageLayout from "../components/editors-page/EditorPageLayout";
import EditorImageBlock from "../components/editors-page/EditorImageBlock";

export default function JointVenturePage() {
  return (
    <EditorPageLayout title="JOINT VENTURE">
      <p>
        Its a joint venture between <strong>Paithrukam Health Tourism Projects Pvt Ltd</strong>, and <strong>Mr. PK Jaghangeer</strong>.
      </p>

      <EditorImageBlock
        src="/joint-venture/joint-venture.png"
        alt="Joint Venture collaboration"
      />

      <p className="text-xl">
        Sri. P.K. Jahangeer is a businessman based in Doha, Qatar. He hails from Paluvai and purchased and developed this Perumbayil House.
        In order to make this an authentic ayurveda center, he joined hands with "Paithrukam Health Tourism Projects (P) Ltd",
        headed by Sajeev Kurup. V and his wife Geetha Sajeev. Thus, the joint venture was formed as "PERUMBAYIL AYURVEDA MANA".
      </p>

      <EditorImageBlock
        src="/joint-venture/hospitality.jpg"
        alt="Perumbayil Ayurveda Mana"
        caption="An authentic ayurveda centre formed by a passionate joint venture."
      />
    </EditorPageLayout>
  );
}