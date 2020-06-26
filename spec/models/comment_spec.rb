require 'rails_helper'

RSpec.describe Comment, type: :model do
  subject { described_class.new(comment: "IT",
                                ticket_id: 3) }

  describe "Validations" do
    it "is not valid without a comment" do
      subject.comment = nil
      expect(subject).to_not be_valid
    end

    it "is not valid without a ticket id" do
      subject.ticket_id = nil
      expect(subject).to_not be_valid
    end
  end

  describe "Associations" do
    it { should belong_to(:user) }
    it { should belong_to(:ticket) }
  end
end
