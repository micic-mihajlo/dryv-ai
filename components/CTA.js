import ButtonCheckout from "./ButtonCheckout";
import config from "@/config";

const CTA = () => {
  return (
    <section className="relative py-24 px-8 bg-gradient-to-r from-primary to-secondary text-center text-neutral-content w-full">
      <div className="flex justify-center animate-opacity">
        <div className="flex flex-col items-center max-w-xl p-8 md:p-0">
          <h2 className="font-bold text-3xl md:text-5xl tracking-tight mb-8 md:mb-12">
            Ready to reclaim your time?
          </h2>
          <p className="text-lg opacity-80 mb-12 md:mb-16">
            Let Dryv optimize your schedule and boost your productivity.
          </p>

          <ButtonCheckout priceId={config.stripe.plans[0].priceId} />
        </div>
      </div>
    </section>
  );
};

export default CTA;

