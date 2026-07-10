"use client";

import EditorPageLayout from "../components/editors-page/EditorPageLayout";
import EditorImageBlock from "../components/editors-page/EditorImageBlock";

export default function AyurvedaPage() {
  return (
    <EditorPageLayout title="AYURVEDA">
      <p className="italic text-lg md:text-xl py-1 text-[#680007]">
        &ldquo;AYURVEDA&rdquo;, the science of life, is the oldest and most holistic medicinal system available on the planet today.
      </p>

      <p>
        Having a balanced state of doshas, agni (digestive fire), dhatus (tissues) normal functioning of mala (waste products), cheerful state of atman (soul), sensory organs and mind are the symptoms of healthy life.
      </p>

      <p>
        Ayurvedic treatments lay emphasis on examining the dosha prakriti or the natural states of individuals before proceeding. The prakriti or the physical constitution, susceptibility to diseases, mental make-up and lifestyle of an individual is ascertained in accordance to the elemental constitution of the larger prakriti or the universe.
      </p>

      <EditorImageBlock
        src="/services-methods/Abhyanga/thumbnail.JPG"
        alt="Abhyanga Ayurvedic oil massage therapy"
        caption="Abhyangam — A traditional synchronized full-body massage to restore dosha balance."
      />

      <p>
        Other basic concepts of Ayurvedic system are the Saptha Dhathus (seven body bodily tissues) such as Rasa, Raktha, Mamsa, Meda, Asthi, Majja &amp; Shukra Dhathus, Srotas (Channels), Ama (improperly digested toxins and filthy matter) and the trinity of life - body, mind and spiritual awareness.
      </p>

      <p>
        Ayurveda takes into consideration the body, mind and soul of an individual as the unit for diagnosis. The first step in the method of diagnosis in Ayurvedic form of medicine is to determine the constitution of the person. That means it is the patient who is diagnosed first and not the disease. This is done by a special procedure like DARSANA, SPARSANA &amp; PRASHNA.
      </p>

      <EditorImageBlock
        src="/services-methods/Shirodhara/thumbnail.JPG"
        alt="Shirodhara Ayurvedic continuous stream therapy"
        caption="Shirodhara — Gentle continuous pouring of warm medicated oil on the forehead."
      />

      <p>
        The same disease might appear in different forms in two persons because their constitution is different. Due to this variation in constitution the medicines and treatment may be different for two people with the same illness. This difference in treatment methods according to the constitution is essential to bring back the natural balance of the biological humors. The constitutional approach is the essence of the Ayurvedic system.
      </p>

      <p>
        Ayurvedic treatments can be classified under two groups - SHODHANA and SHAMANA.
      </p>

      <p>
        SHODHANA consist of five parts - The pancha karmas which contain Vasthi (cleaning enemas), Nasyam (nasal medication), Viraechanam (purgation), Vamanam (emesis) and Raktha moksham (blood letting). All these require preliminary Ayurvedic practices of oleation and sweating. Treatments like Dhara, pizichil, Navarakizhi, Ela kizhi, Siro vasthi, Thalapothichil etc are the specialty of Kerala which are highly effective in a number of diseases which include Motor neuron diseases, Arthritis of various kinds, skin diseases, heart diseases, peptic ulcer, Asthma, Peripheral vascular diseases and Gynecological disorders.
      </p>

      {/* Links Block */}
      <div className="pt-8 mt-8 border-t border-[#680007]/10">
        <h3 className="font-samarn text-xl text-[#680007] mb-4 tracking-wider uppercase">Related Links:</h3>
        <ul className="space-y-2 list-none pl-0">
          <li>
            <a href="/ayurveda/history" className="text-[#680007] hover:text-[#b38e5d] transition-colors underline decoration-[#680007]/30 hover:decoration-[#b38e5d]">
              Ayurveda &amp; History
            </a>
          </li>
          <li>
            <a href="/ayurveda/evolution-methodology" className="text-[#680007] hover:text-[#b38e5d] transition-colors underline decoration-[#680007]/30 hover:decoration-[#b38e5d]">
              Evolution and Methodology
            </a>
          </li>
          <li>
            <a href="/ayurveda/ashtavidya-tradition" className="text-[#680007] hover:text-[#b38e5d] transition-colors underline decoration-[#680007]/30 hover:decoration-[#b38e5d]">
              Ashtavidya Tradition
            </a>
          </li>
          <li>
            <a href="/ayurveda/dos-and-donts" className="text-[#680007] hover:text-[#b38e5d] transition-colors underline decoration-[#680007]/30 hover:decoration-[#b38e5d]">
              Do&apos;s and don&apos;ts
            </a>
          </li>
          <li>
            <a href="/ayurveda/tips-diet-recipes" className="text-[#680007] hover:text-[#b38e5d] transition-colors underline decoration-[#680007]/30 hover:decoration-[#b38e5d]">
              Ayurveda Tips, Diet and Recipes
            </a>
          </li>
        </ul>
      </div>
    </EditorPageLayout>
  );
}
