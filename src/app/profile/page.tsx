export const metadata = {
  title: "Bucket Profile, Gianangelo Dichio",
  description: "Bucket profile card: canon branch weights from 147 public sources and signed, timestamped identity checks.",
};

const files = [
  ["Checks", "/profile/verified-checks.json"],
  ["Signature", "/profile/verified-checks.json.sig"],
  ["Timestamp", "/profile/verified-checks.json.sig.ots"],
  ["Signer key", "/profile/allowed_signers"],
];

export default function Profile() {
  return (
    <main className="flex flex-col items-center gap-6 p-6 mt-10">
      <h1 className="text-3xl font-bold">Bucket Profile</h1>
      <p className="text-sm">Card id bkt:58d3033e855efa7f18ce11b5, issued 2026-09-28</p>
      <p className="max-w-2xl text-center">
        The Bucket Foundation profile builder made this card from 147 public sources: GitHub, bucket.foundation,
        gianyrox.com and project documentation. Branch weights measure what my work writes about; the mastery
        sphere fills in after Research OS assessments.
      </p>
      <img
        src="/profile/profile-card.png"
        alt="Bucket profile card for Gianangelo Dichio: a radar of canon branch weights and a list of verified identity checks"
        className="w-full max-w-4xl rounded-lg"
      />
      <p className="max-w-2xl text-center">
        The checks file holds results and a hash of the profile data, never the data itself. It carries an ed25519
        signature and a Bitcoin timestamp through OpenTimestamps.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        {files.map(([label, href]) => (
          <a key={href} href={href} className="title-button px-3 py-1">
            {label}
          </a>
        ))}
      </div>
      <p className="text-sm">
        Full site: <a className="underline" href="https://www.gianyrox.com/profile/">gianyrox.com/profile</a>
      </p>
    </main>
  );
}
